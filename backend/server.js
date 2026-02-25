const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const vendorRoutes = require("./routes/vendor");



const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/casecraft")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/vendor", vendorRoutes);


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
