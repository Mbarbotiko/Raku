const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  googleMapsKey: process.env.API_KEY,
  port: process.env.PORT
};

