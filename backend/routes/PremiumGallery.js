const express = require("express");
const router = express.Router();
const PremiumGallery = require("../models/PremiumGallery");
const multer = require("multer");

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });


// ✅ Premium Add
router.post("/add-premium", async (req, res) => {
  try {
    const { name, price, image } = req.body;

    const design = new PremiumGallery({
      name,
      price,
      image,
      source: "premium"
    });

    await design.save();

    res.json({ message: "Premium added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving premium design" });
  }
});


// ✅ Manual Add
router.post("/add-manual", upload.single("image"), async (req, res) => {
  try {
    const { name, price } = req.body;

    const design = new PremiumGallery({
      name,
      price,
      image: req.file.path,
      source: "manual"
    });

    await design.save();

    res.json({ message: "Manual design added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload error" });
  }
});


// ✅ Remove Premium
router.post("/remove-premium", async (req, res) => {
  try {
    const { image } = req.body;
    await PremiumGallery.findOneAndDelete({ image });
    res.json({ message: "Design removed from gallery" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error removing design" });
  }
});


// ✅ Get All
router.get("/", async (req, res) => {
  const data = await PremiumGallery.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;
