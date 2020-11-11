const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("User");
const routes = express.Router();

routes.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User({ email, password });
    await user.save();
    res.send("This is the signup route");
  } catch (e) {
    res.status(422).send(e.message);
  }
});

module.exports = routes;
