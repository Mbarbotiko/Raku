const path = require("path");
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

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};