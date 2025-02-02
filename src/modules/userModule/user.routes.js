const router = require("express").Router()
const {doCreateUser,dologinUser} = require("./user.controller")
const {verifyToken} = require("../../utils/userAuth")


router.post("/register",verifyToken,doCreateUser)
router.post("/register/admin",doCreateUser)
router.post("/login",dologinUser)



module.exports = router
