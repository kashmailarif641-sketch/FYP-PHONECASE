const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const hf = require("../config/huggingface");
const User = require("../models/user");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, "casecraft_secret_key");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "aiImageInput/";
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage });

const stylePrompts = {
    anime: "Transform into high-quality anime style, highly detailed, vibrant colors, sharp lines, expressive features, Japanese animation aesthetic, 8k resolution, sharp focus.",
    cartoon: "Convert into a playful 3D cartoon style, modern animation character design, highly detailed, soft lighting, bold features, 8k resolution, sharp focus.",
    sketch: "Redraw as a detailed charcoal pencil sketch, artistic strokes, hand-drawn textures, high contrast, highly detailed, 8k resolution, sharp focus."
};

const handleAIImageUpload = async (req, res) => {
    const { style, model } = req.body;
    
    if (!req.file) {
        return res.status(400).json({ message: "No image file uploaded" });
    }

    try {
        console.log("------------------------------------------");
        console.log("🚀 AI Generation Started");
        console.log("👤 User ID:", req.user.id);
        
        const userImageBuffer = fs.readFileSync(req.file.path);
        const userImageBase64 = userImageBuffer.toString("base64");
        const selectedPrompt = stylePrompts[style] || "High quality artistic transformation";

        console.log("🎨 Calling Flux AI via HF Router...");
        
        const response = await fetch(
            "https://router.huggingface.co/replicate/v1/models/black-forest-labs/flux-kontext-dev/predictions",
            {
                headers: {
                    "Authorization": `Bearer ${process.env.HF_TOKEN}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    input: {
                        input_image: `data:image/png;base64,${userImageBase64}`,
                        prompt: selectedPrompt,
                        go_fast: false,
                        megapixels: "1",
                        num_outputs: 1,
                        aspect_ratio: "1:1",
                        output_format: "webp",
                        output_quality: 100,
                        num_inference_steps: 25
                    }
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HF Router Error: ${response.status} - ${errorText}`);
        }

        let result = await response.json();
        console.log("📝 Initial AI Response ID:", result.id);

        if (result.error) {
            throw new Error(`AI Router Error: ${result.error}`);
        }

        let attempts = 0;
        const maxAttempts = 60;
        
        while ((result.status === "starting" || result.status === "processing") && attempts < maxAttempts) {
            attempts++;
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2s between polls

            try {
                const pollUrl = `https://router.huggingface.co/replicate/v1/predictions/${result.id}`;
                const pollResponse = await fetch(pollUrl, {
                    headers: { "Authorization": `Bearer ${process.env.HF_TOKEN}` }
                });

                if (!pollResponse.ok) {
                    const errorMsg = await pollResponse.text();
                    console.error(`❌ Poll Attempt ${attempts} failed:`, pollResponse.status, errorMsg);
                    continue; 
                }

                result = await pollResponse.json();
                console.log(`⏳ Attempt ${attempts} - Status: ${result.status}`);
            } catch (err) {
                console.error(`❌ Fetch error during poll ${attempts}:`, err.message);
            }
        }

        if (result.status !== "succeeded") {
            throw new Error(`AI Generation ${result.status} after ${attempts} attempts. ${result.error || ""}`);
        }

        const aiOutputUrl = result.output; 
        const finalImageUrl = Array.isArray(aiOutputUrl) ? aiOutputUrl[0] : aiOutputUrl;

        if (!finalImageUrl) {
            throw new Error("AI succeeded but returned no output URL.");
        }

        console.log("🔗 AI Final Image URL:", finalImageUrl);

        // Download generated image
        const imageRes = await fetch(finalImageUrl);
        if (!imageRes.ok) throw new Error("Failed to download generated image from the output URL.");
        const buffer = Buffer.from(await imageRes.arrayBuffer());

        // Save generated image
        const generatedFileName = `ai-${Date.now()}-${req.user.id}.webp`;
        const generatedDirPath = "generatedImages/";
        
        if (!fs.existsSync(generatedDirPath)) {
            fs.mkdirSync(generatedDirPath);
        }

        const generatedPath = path.join(generatedDirPath, generatedFileName);
        fs.writeFileSync(generatedPath, buffer);

        const imageUrl = `http://127.0.0.1:5000/generatedImages/${generatedFileName}`;

        await User.findByIdAndUpdate(req.user.id, {
            $push: {
                aiImages: {
                    url: imageUrl,
                    prompt: selectedPrompt,
                    style: style,
                    model: model
                }
            }
        });

        console.log("✅ AI Image Saved:", generatedFileName);
        console.log("------------------------------------------");

        res.json({
            message: "AI Generation Success! ✨",
            imageUrl: imageUrl,
            filename: generatedFileName,
            style: style,
            model: model
        });

    } catch (error) {
        console.error("AI ERROR:", error.message);
        
        let errorMessage = "AI Generation failed. Please try again.";
        if (error.message.includes("401")) {
            errorMessage = "Invalid API Token. Check HF_TOKEN in server.";
        } else if (error.message.includes("503")) {
            errorMessage = "AI Model is loading. Please try again in a few moments.";
        }

        res.status(500).json({ message: errorMessage });
    }
};

router.post("/image", authMiddleware, upload.single("image"), handleAIImageUpload);

module.exports = router;
