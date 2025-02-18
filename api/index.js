const app = require("../index"); // Import your existing Express app

module.exports = (req, res) => {
  return app(req, res); // Use Express as a serverless function
};