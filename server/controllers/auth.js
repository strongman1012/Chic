import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Service from "../models/Service.js";
import Category from "../models/Category.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      email,
      password,
      con_password
    } = req.body;

    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ error: "Email is use. " });

    if (password != con_password) {
      return res.status(500).json({ error: "Confirm password is not correct." });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
    res.status(200).json({ token, user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const services = async (req, res) => {
  try {
    const {
      bookname,
      duration,
      price,
      categoryId,
      availableTime,
    } = req.body;

    const newUser = new Service({
      bookname,
      duration,
      price,
      categoryId,
      availableTime
    });
    const savedUser = await newUser.save();
    res.status(200).json("Ok");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const category = async (req, res) => {
  try {
    const {
      category_name,

    } = req.body;

    const newUser = new Category({
      category_name,

    });

    const savedUser = await newUser.save();
    res.status(200).json("Ok");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ error: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
