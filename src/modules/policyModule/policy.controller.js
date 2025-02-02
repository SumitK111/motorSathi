const {createPolicy} = require("./policy.service")

exports.doCreatePolicy = async (req,res) => {
    try {
        const data = req.body
        data["createdBy"] = req.user.id
        const resp = await createPolicy(req.body)
        if(resp.status === true){
            return res.status(201).json(resp)
        }else{
            return res.status(400).json(resp)
        }
    } catch (error) {
        console.log(error);
        
    }
}