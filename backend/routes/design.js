const express = require("express");
const router = express.Router();
const Design = require("../models/design");

// ===== SAVE DESIGN =====
router.post("/save", async (req, res) => {
    try {
        const { userId, designName, model, canvasData, previewImage, material } = req.body;

        // Basic validation
        if (!userId || !designName || !model || !canvasData || !previewImage) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }

        const newDesign = new Design({
            userId,
            designName,
            model,
            canvasData,
            previewImage,
            material
        });

        await newDesign.save();

        res.status(201).json({
            message: "Design saved successfully",
            design: newDesign
        });

    } catch (error) {
        console.error("Save Design Error:", error);
        res.status(500).json({ message: "Server error while saving design" });
    }
});
// ===== GET USER DESIGNS =====
router.get("/user/:userId", async (req, res) => {
    try {
        const designs = await Design.find({ userId: req.params.userId }).sort({ createdAt: -1 });
        res.json(designs);
    } catch (error) {
        console.error("Fetch Designs Error:", error);
        res.status(500).json({ message: "Error fetching designs" });
    }
});
// ===== GET SINGLE DESIGN =====
router.get("/:id", async (req, res) => {
    try {
        const design = await Design.findById(req.params.id);

        if (!design) {
            return res.status(404).json({ message: "Design not found" });
        }

        res.json(design);
    } catch (error) {
        res.status(500).json({ message: "Error fetching design" });
    }
});
// ===== UPDATE DESIGN =====
router.put("/:id", async (req, res) => {
    try {
        const { designName, model, canvasData, previewImage, material } = req.body;

        const updatedDesign = await Design.findByIdAndUpdate(
            req.params.id,
            {
                designName,
                model,
                canvasData,
                previewImage,
                material
            },
            { new: true }
        );

        if (!updatedDesign) {
            return res.status(404).json({ message: "Design not found" });
        }

        res.json({ message: "Design updated", design: updatedDesign });

    } catch (error) {
        res.status(500).json({ message: "Update failed" });
    }
});
// DELETE DESIGN
router.delete("/:id", async (req, res) => {
    try {
        const deletedDesign = await Design.findByIdAndDelete(req.params.id);

        if (!deletedDesign) {
            return res.status(404).json({ message: "Design not found" });
        }

        res.json({ message: "Design deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;