import express from "express";
import { signin, signup, signOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signOut);

export default router;

// // Signup
// router.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;
//   const hash = await bcrypt.hash(password, 10);
//   const user = await User.create({ name, email, password: hash });
//   res.status(201).json({ message: "User created" });
// });

// // Login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return res.status(404).json({ msg: "User not found" });
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });
//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//   res.json({ token, user: { name: user.name, email: user.email } });
// });

// // Protected Profile
// router.get("/profile", verifyToken, async (req, res) => {
//   const user = await User.findById(req.user.id).select("-password");
//   res.json(user);
// });
