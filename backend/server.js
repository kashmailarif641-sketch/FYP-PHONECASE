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




const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api/design", designRoutes);

mongoose.connect("mongodb://kashmailarif51_db_user:5qpeWfeNkWE4VAjx@ac-hrw7o3p-shard-00-00.ri4pl9w.mongodb.net:27017,ac-hrw7o3p-shard-00-01.ri4pl9w.mongodb.net:27017,ac-hrw7o3p-shard-00-02.ri4pl9w.mongodb.net:27017/casecraft?ssl=true&replicaSet=atlas-sh99hn-shard-0&authSource=admin&retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));

app.use("/api", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payouts", payoutRoutes);
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

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
