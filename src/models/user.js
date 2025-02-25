module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      role: {
        type: DataTypes.STRING,
      },
      addedBy: {
        type: DataTypes.INTEGER,
      },
    });
  
    User.associate = function (models) {
      // A user can have a parent (addedBy) user, and can have many child users
      User.belongsTo(models.User, { as: "parent", foreignKey: "addedBy" });
      User.hasMany(models.User, { as: "children", foreignKey: "addedBy" });
      User.hasMany(models.Policy, { foreignKey: "createdBy", as: "policies" });
    };
  
    return User;
  };
  