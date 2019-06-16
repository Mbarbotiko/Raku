const path = require("path");
const { googleMapsKey, port } = require('../config');
module.exports = function(app) {
console.log('linked HTML paths')

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // app.get("/careers", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/careers.html"));
  // });
  app.get("/hours&locations", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/locations.html"));
  })
  app.get("/menu", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menu.html"));
  })
  app.get("/delivery", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/delivery.html"));
  })
  // app.get("/fromthestaff", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/staff.html"));
  // })

  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });


  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs')
  app.get('/test-route', function(req, res){
    res.render('index');
  })


  // app.get('/iframe', function(req, res){
  //   res.render('index',{
  //     mapsKeyforEJS : googleMapsKey
  //   })
  // });

};