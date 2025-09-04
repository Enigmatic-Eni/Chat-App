import express from "express";
import { signup, login } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Auth routes
router.post("/signup", signup);
router.post("/login", login);

// Example protected route
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;
