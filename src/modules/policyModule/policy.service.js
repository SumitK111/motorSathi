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

module.exports = {createPolicy}