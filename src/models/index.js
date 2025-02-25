const fs = require("fs");
const path = require("path");
const { sequelize } = require("../config/db.config"); // Import sequelize connection
const Sequelize = require("sequelize");

const db = {};

// Dynamically load all models from the 'models' directory
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js") // Exclude 'index.js' itself
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Set up associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
