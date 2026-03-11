const express = require("express");
const mongoose = require("mongoose");
const app = express();

// MongoDB connection
mongoose.connect("mongodb+srv://codeveda:codeveda@cluster0.tq3ysci.mongodb.net/mydb?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});