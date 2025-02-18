const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");
const path = require("path");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

  const storage = multer.diskStorage({
    destination: "uploads/", // Save temporarily before Cloudinary upload
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname); // Get original file extension
      const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
      cb(null, uniqueName);
    },
  });
  const upload = multer({
    storage: storage,
    limits: { fileSize: 500 * 1024 }, // 5MB size limit
    fileFilter: (req, file, cb) => {
      const allowedMimetypes = [
        "application/pdf",     // PDF files
        "image/jpeg",          // JPEG images
        "image/png",           // PNG images
        "image/gif",           // GIF images
        "image/webp",          // WebP images (if needed)
      ];
      if (!allowedMimetypes.includes(file.mimetype)) {
        return cb(new Error("Only PDF files are allowed!"), false);
      }
      cb(null, true);
    },
  });

module.exports = {upload,cloudinary}