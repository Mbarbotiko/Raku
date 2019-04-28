const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  googleMapsKey: process.env.API_KEY,
  port: process.env.PORT
};

// var iFrame = `<iframe width="50%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}
// &q=Raku+Sushi,Saint Louis Park+MN" allowfullscreen>
// </iframe>`