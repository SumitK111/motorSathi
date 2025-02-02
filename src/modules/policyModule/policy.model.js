const {sequelize} = require("../../config/db.config")
const {DataTypes} = require("sequelize")

const Policy = sequelize.define("Policy", {
    id:{
        type: DataTypes.NUMBER,
        primaryKey:true,
        autoIncrement:true
    },
    createdBy:{
        type: DataTypes.NUMBER,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerMobile: {
      type: DataTypes.STRING,
    },
    customerF_HName: {
        type: DataTypes.STRING,  
    },
    customerAge: {
      type: DataTypes.NUMBER,
    },
    customerDob:{
        type:DataTypes.STRING
    },
    customerGender:{
        type:DataTypes.STRING
    },
    customerAadhar_f:{
        type:DataTypes.STRING
    },
    customerAadhar_b:{
        type:DataTypes.STRING
    },
    customerPan:{
        type:DataTypes.STRING
    },
    customerInvoice:{
        type:DataTypes.STRING
    },
    nomineeName:{
        type:DataTypes.STRING
    },
    nomineeRelation:{
        type:DataTypes.STRING
    },
    nomineeGender:{
        type:DataTypes.STRING
    },
    nomineeAge:{
        type:DataTypes.STRING
    },
    nomineeDob:{
        type:DataTypes.STRING
    },
    billAddL1:{
        type:DataTypes.STRING
    },
    billAddL2:{
        type:DataTypes.STRING
    },
    billAddState:{
        type:DataTypes.STRING
    },
    billAddCity:{
        type:DataTypes.STRING
    },
    billAddArea:{
        type:DataTypes.STRING
    },
    billAddPin:{
        type:DataTypes.NUMBER
    },
    shipAddL1:{
        type:DataTypes.STRING
    },
    shipAddL2:{
        type:DataTypes.STRING
    },
    shipAddState:{
        type:DataTypes.STRING
    },
    shipAddCity:{
        type:DataTypes.STRING
    },
    shipAddArea:{
        type:DataTypes.STRING
    },
    shipAddPin:{
        type:DataTypes.NUMBER
    },
    vehicleNo:{
        type:DataTypes.STRING
    },
    engineNo:{
        type:DataTypes.STRING
    },
    chassNo:{
        type:DataTypes.STRING
    },
    model:{
        type:DataTypes.STRING
    },
    subModel:{
        type:DataTypes.STRING
    },
    mfgYear:{
        type:DataTypes.NUMBER
    },
    color:{
        type:DataTypes.STRING
    },
    vehicleType:{
        type:DataTypes.STRING
    }, 
    ex_showroom_price:{
        type:DataTypes.NUMBER
    },
    vehicle_ex_showroom:{
        type:DataTypes.NUMBER
    },
    policy_date:{
        type:DataTypes.STRING
    }, 
    hypo_policy:{
        type:DataTypes.BOOLEAN
    }, 
    hypo_city:{
        type:DataTypes.STRING
    }, 
    financer_name:{
        type:DataTypes.STRING
    }, 
    // vehicleType:{
    //     type:DataTypes.STRING
    // }, 
    // vehicleType:{
    //     type:DataTypes.STRING
    // }, 
    

 });
 
//  sequelize.sync({force:true})
 module.exports = Policy