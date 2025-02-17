const {createUser,loginUser} = require("./user.service")
const {createUserVal} = require("./user.validator")


exports.doCreateUser = async (req,res)=>{
    try {
        const data = req.body
        
        const validateUser = await validateRole(req.user.role,data.role)
        if(!validateUser){
            return res
            .status(401).json({ status: false, message: "You can't add this User!!"});
        }
        const validate = await createUserVal.validate(data);
        if (validate.error)
          return res
            .status(400)
            .json({ status: false, message: validate?.error?.details[0]?.message });
            data["addedBy"] = req.user.id
        const resp = await createUser(data)
      
        if(resp.status === true){
            return res.status(201).json(resp)
        }else{
            return res.status(400).json(resp)
        }
    } catch (error) {
        console.log(error);
        
    }
}

exports.dologinUser = async (req,res)=>{
    try {
       
        const resp = await loginUser(req.body)
      
        if(resp.status === true){
            return res.status(200).json(resp)
        }else{
            return res.status(400).json(resp)
        }
    } catch (error) {
        console.log(error);
        
    }
}

const validateRole = async (tokenRole,userRole)=>{
    if(tokenRole === 'admin'){
        return true
    }else if(tokenRole === 'dealer' && userRole === 'subDealer' ||  userRole === 'dealerExecutive'){
        return true
    } else if(tokenRole === 'subDealer' && userRole === 'dealerExecutive'){
        return true
    }else{
        return false
    }
}