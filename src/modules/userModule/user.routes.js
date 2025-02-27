const router = require("express").Router()
const {doCreateUser,dologinUser,doGetPlace} = require("./user.controller")
const {verifyToken} = require("../../utils/userAuth")


router.post("/register",verifyToken,doCreateUser)
router.post("/register/admin",doCreateUser)
router.post("/login",dologinUser)
router.get("/place",doGetPlace)



module.exports = router
