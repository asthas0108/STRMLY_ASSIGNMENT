import express from "express";
import multer from "multer";
import { verifyToken } from "../utils/verifyUser.js";
import { getVideoFeed, videoUpload } from "../controllers/video.controller.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post("/upload", verifyToken, upload.single("file"), videoUpload);
router.get("/videos", getVideoFeed);

export default router;