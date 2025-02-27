module.exports = (sequelize, DataTypes) => {
    const Place = sequelize.define("Place", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parent:{
        type: DataTypes.INTEGER,
      },
      code:{
        type: DataTypes.STRING,
      }
      });

    
    return Place;
  };
  