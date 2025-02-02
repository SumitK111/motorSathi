const router = require("express").Router()
const {verifyToken} = require("../../utils/userAuth")
const {doCreatePolicy,doUploadPdf,doGetAllPolicy} = require("./policy.controller")

router.post("/create",verifyToken,doCreatePolicy)
router.get("/get-all",verifyToken,doGetAllPolicy)
router.post("/uploadPdf",verifyToken,doUploadPdf)

module.exports = router