const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")

const userRouter = require("./src/modules/userModule/user.routes")
const policyRouter = require("./src/modules/policyModule/policy.routes")
app.use(cors());

app.use(express.json())
const {sequelize} = require("./src/config/db.config")
const db = require("./src/models")

sequelize
  .sync({ force: false }) // Don't use force in production (use for development only)
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.use("/user",userRouter)
app.use("/policy",policyRouter)

const port = process.env.PORT || 2000
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
    
})





