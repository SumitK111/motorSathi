const Policy = require("./policy.model")

const createPolicy = async (data) => {
    try {
        const resp = await Policy.create(data)

        return {
            status:true,
            message:"Policy request successfull!!",
            data:resp.toJSON()
        }
    } catch (error) {
        console.log(error);
        
        return {
            status:false,
            message:"Error while generating request!!",
            data:null
        } 
    }
}

const getAllPolicy = async (userId,page,limit) =>{
    try {
        const offset = (page-1)*limit
        console.log(userId,page,limit);
        
        const policyList = await Policy.findAndCountAll({
            where:{
                createdBy:userId,
            },
            order:[
                ["createdAt","DESC"]
            ],
            offset:offset,
            limit:limit,
            
        })
// console.log("PPPPP",policyList);

        return {
            status:true,
            message:"Reports fatched successfully!!",
            data:policyList
        } 
    } catch (error) {
        console.log();
        
    }
}

getAllPolicy(1,1,5)
module.exports = {createPolicy,getAllPolicy}