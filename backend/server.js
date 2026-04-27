const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const vendorRoutes = require("./routes/vendor");
const session = require("express-session");
const passport = require("./config/passport");
const designRoutes = require("./routes/design");
const orderRoutes = require("./routes/order");
const payoutRoutes = require("./routes/payoutRoutes");
const premiumGalleryRoutes = require("./routes/PremiumGallery");




const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api/design", designRoutes);

mongoose.connect("mongodb://kashmail:kashmail12345@ac-vewsz6m-shard-00-00.sfuejqp.mongodb.net:27017,ac-vewsz6m-shard-00-01.sfuejqp.mongodb.net:27017,ac-vewsz6m-shard-00-02.sfuejqp.mongodb.net:27017/?ssl=true&replicaSet=atlas-7a8jne-shard-0&authSource=admin&appName=Cluster0")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));

app.use("/api", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payouts", payoutRoutes);
app.use("/api/premium-gallery", premiumGalleryRoutes);
app.use(session({
  secret: "casecraft_secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


const jwt = require("jsonwebtoken");

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {

    const token = jwt.sign(
      { id: req.user._id, role: req.user.role },
      "casecraft_secret_key",
      { expiresIn: "7d" }
    );

    res.redirect(`http://127.0.0.1:5500/pages/user/user-dashboard.html?token=${token}`);
  }
);

// 🔥 AI ROUTE
app.post("/generate-ai", async (req, res) => {
  const { prompt, steps } = req.body;

  try {
    const width = 1024;
    const height = 1024;
    const model = "flux"; // you can optionally specify model like flux or turbo

    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&model=${model}&nologo=true`;
    
    // Fetch image from Pollinations API
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.set("Content-Type", "image/jpeg");
    res.send(buffer);

  } catch (error) {
    console.error("SERVER ERROR:", error.message);

    res.status(500).json({
      error: error.message || "Server error",
    });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
 




