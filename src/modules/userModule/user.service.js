// const User = require("./user.model")
const {User,Place} = require("../../models")
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


const getPlace = async (condition)=>{
    try {
        let data
       if(condition.parent){
        data = await Place.findOne({where:{name:condition.parent}})
        console.log(data);
        
        condition.parent = data.id
       }
      
        const resp = await Place.findAll({where:condition,order:[['name','ASC']]})
        return {
            status:true,
            message:"Data find Successfully!!",
            data:resp
        }
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {createUser,loginUser,getPlace}