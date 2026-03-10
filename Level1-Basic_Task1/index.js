const express = require("express");
const mongoose = require("mongoose");
const app = express();

// MongoDB connection
mongoose.connect("mongodb://codeveda:codeveda@ac-3cjknyv-shard-00-00.7onuscn.mongodb.net:27017,ac-3cjknyv-shard-00-01.7onuscn.mongodb.net:27017,ac-3cjknyv-shard-00-02.7onuscn.mongodb.net:27017/?ssl=true&replicaSet=atlas-grq01v-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});