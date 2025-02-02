const jwt = require("jsonwebtoken")


const generateToken = async (data) => {
    const token = await jwt.sign(data,process.env.TOKEN_KEY)
    return token
}

const verifyToken = async(req,res,next)=>{
    const tokenBearer = req.headers.authorization
    if(tokenBearer){
        const token = tokenBearer.split(" ")[1]
        if(token){
            const valid = await jwt.decode(token,process.env.TOKEN_KEY)

            if(valid){
                req.user = valid
                next()
            }else{
                res.status(401).json({status:false,message:"Invalid Token!!"})
            }
        }else{
            res.status(401).json({status:false,message:"Invalid Token!!"})
        }
    }else{
        res.status(401).json({status:false,message:"Token missing"})
    }
}



module.exports = {generateToken,verifyToken}