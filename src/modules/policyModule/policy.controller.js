const {createPolicy,getAllPolicy} = require("./policy.service")
const {upload,cloudinary} = require("../../utils/upload")
const fs = require("fs")

exports.doCreatePolicy = async (req,res) => {
    try {
        const data = req.body
        data["createdBy"] = req.user.id
        const resp = await createPolicy(req.body)
        if(resp.status === true){
            return res.status(201).json(resp)
        }else{
            return res.status(400).json(resp)
        }
    } catch (error) {
        console.log(error);
        
    }
}

exports.doGetAllPolicy = async (req,res) => {
  try {
      const {page=1,limit = 10} = req.query
      const userId = req.user.id
      const role = req.user.role
      const resp = await getAllPolicy(userId,role,page,limit)
      if(resp.status === true){
          return res.status(201).json(resp)
      }else{
          return res.status(400).json(resp)
      }
  } catch (error) {
      console.log(error);
      
  }
}



exports.doUploadPdf = async (req,res) =>{
    try {
        
        
       await upload.single("pdf")(req, res, async (err) => {
            if (err) {
              if (err.code === "LIMIT_FILE_SIZE") {
                return res.status(400).json({ message: "File size exceeds 500KB limit!" });
              }
              return res.status(400).json({ message: err.message });
            }
        
            if (!req.file) return res.status(400).json({ message: "No file uploaded!" });
            console.log(req.file);
            try {
              // Upload file to Cloudinary
              const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "pdf_uploads",
                resource_type: "raw",
              });
        console.log(result);
        
              // Delete local file after upload
              fs.unlinkSync(req.file.path);
        
              res.status(200).json({status:true, message: "File uploaded successfully!", fileUrl: result.secure_url });
            } catch (error) {
                console.log(error);
              res.status(500).json({status:false, message: "Upload failed", error });
            }
          });

    } catch (error) {
        console.log(error);
        
    }
}