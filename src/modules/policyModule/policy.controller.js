const {createPolicy} = require("./policy.service")

exports.doCreatePolicy = async (req,res) => {
    try {
        const resp = await createPolicy(req.body)
        
    } catch (error) {
        console.log(error);
        
    }
}