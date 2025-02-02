const Joi = require('joi')


exports.createUserVal = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    mobile: Joi.string().required(),
    role: Joi.string().valid("dealer","subDelear","dealerExecutive").required(),
    password: Joi.string().required(),
})