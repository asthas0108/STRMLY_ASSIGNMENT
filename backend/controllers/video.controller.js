import Video from "../models/video.model.js";
import cloudinary from "../utils/cloudinary.js";

export const videoUpload = async (req, res, next) => {
  const { title, description } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  try {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "video", folder: "strmly" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary error:", error);
          return res.status(500).json({ success: false, message: error.message });
        }

        try {
          const video = await Video.create({
            title,
            description,
            videoUrl: result.secure_url,
            uploadedBy: req.user.id,
          });

          return res.status(200).json({ success: true, video });
        } catch (dbError) {
          console.error("DB error:", dbError);
          return res.status(500).json({ success: false, message: "DB save failed" });
        }
      }
    );

    uploadStream.end(file.buffer); // ❗ only trigger Cloudinary once
  } catch (outerError) {
    console.error("Outer error:", outerError);
    // ❌ DO NOT SEND RESPONSE HERE
    // Cloudinary already handles it inside callback
  }
};


export const getVideoFeed = async(req, res) => {
    const videos = await Video.find().populate("uploadedBy", "name").sort({ createdAt: -1 });
    res.json(videos);
}