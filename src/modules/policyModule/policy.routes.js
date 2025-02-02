const router = require("express").Router()
const {verifyToken} = require("../../utils/userAuth")
const {doCreatePolicy} = require("./policy.controller")

router.post("/create",verifyToken,doCreatePolicy)

module.exports = router