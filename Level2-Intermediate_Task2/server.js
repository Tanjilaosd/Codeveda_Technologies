const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);

app.get("/api/protected", require("./middleware/authMiddleware")(["admin"]), (req, res) => {
  res.json({ message: "Admin access granted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));