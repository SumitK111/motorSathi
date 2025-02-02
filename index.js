const express = require("express")
const app = express()
require("dotenv").config()

const userRouter = require("./src/modules/userModule/user.routes")
const policyRouter = require("./src/modules/policyModule/policy.routes")
app.use(express.json())


app.use("/user",userRouter)
app.use("policy",policyRouter)

const port = process.env.PORT || 2000
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
    
})





