const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET single user
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// CREATE user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);

  res.json({ message: "User deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});