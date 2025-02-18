const {sequelize} = require("../../config/db.config")
const {DataTypes} = require("sequelize")

const User = sequelize.define("User", {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,  
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    role:{
        type:DataTypes.STRING
    },
    addedBy:{
      type:DataTypes.INTEGER
    }
 });
 
//  sequelize.sync({force:true})
 module.exports = User
