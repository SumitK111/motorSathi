const router = require("express").Router()
const {verifyToken} = require("../../utils/userAuth")
const {doCreatePolicy,doUploadPdf} = require("./policy.controller")

router.post("/create",verifyToken,doCreatePolicy)
router.post("/uploadPdf",verifyToken,doUploadPdf)

module.exports = router