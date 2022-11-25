const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "ALOK";

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.json("User already exists");
    } else {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email },
        SECRET_KEY
      );
      res.json({ newUser, token });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("Error occured during signup");
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json("No user found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id, email }, SECRET_KEY);
      res.status(201).json({ user, token });
    } else {
      res.status(400).json("Password didn't match");
    }
  } catch (err) {
    res.status(400).json("Error occured during signin");
  }
};

module.exports = { signin, signup };
