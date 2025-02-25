// const {sequelize} = require("../../config/db.config")
// const {DataTypes} = require("sequelize")
// const Policy = require("../policyModule/policy.model")

// const User = sequelize.define("User", {
//   id:{
//     type:DataTypes.INTEGER,
//     autoIncrement:true,
//     primaryKey:true
//   },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     mobile: {
//       type: DataTypes.STRING,
//     },
//     password: {
//         type: DataTypes.STRING,  
//     },
//     isDeleted: {
//       type: DataTypes.BOOLEAN,
//       defaultValue:false
//     },
//     role:{
//         type:DataTypes.STRING
//     },
//     addedBy:{
//       type:DataTypes.INTEGER
//     }
//  });
 
//  User.hasMany(Policy, { foreignKey: 'createdBy', as: 'policies' });
//  User.belongsTo(User, { as: 'parent', foreignKey: 'addedBy' });  // Parent relationship
//  User.hasMany(User, { as: 'children', foreignKey: 'addedBy' });
//  sequelize.sync({force:true})
//  module.exports = User
