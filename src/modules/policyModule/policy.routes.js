const router = require("express").Router()

const {doCreatePolicy} = require("./policy.controller")

router.post("/create",doCreatePolicy)

module.exports = router