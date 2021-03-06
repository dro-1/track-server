const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");
const routes = express.Router();

routes.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (e) {
    res.status(422).send(e.message);
  }
});

module.exports = routes;
