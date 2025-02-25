// const User = require("./user.model")
const {User} = require("../../models")
const {generateToken} = require("../../utils/userAuth")


const createUser = async (data)=>{
    try {
      
        const check = await User.findOne({where:{mobile:data.mobile}})
        if(check){
            return {
                status:false,
                message:"User already registered!!"
            }
        }

        const resp = await User.create(data)
        console.log(resp);
        return {
            status:true,
            message:"User registered successfully!!"
        }
    } catch (error) {
        console.log(error);
        return {
            status:false,
            message:"Error while creating User!!"
        }
    }
}

// createUser()
const loginUser = async (data) => {
    try {
        console.log(data);
        
        const userData = await User.findOne({where:{email:data.email,password:data.password,isDeleted:false}})
        if(!userData){
            return {
                status:false,
                message:"User not found"
            }
        }
        // console.log(userData);
        //{id:userData.id,role:userData.role,mobile:userData.mobile}
        const token = await generateToken(userData.toJSON())

        return {
            status:true,
            message:"User Logged in Successfully!!",
            data:{token:token,name:userData.name}
        }
    } catch (error) {
        console.log(error);
        return {
            status:false,
            message:"Error while login User!!"
        }
    }
}

module.exports = {createUser,loginUser}