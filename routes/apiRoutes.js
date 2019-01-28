module.exports = function(app) {
console.log('api route linked')
var menuItemsData = require("../data/menuItems.js");
app.get("/api/menu", function(req, res) {
    res.json(menuItemsData);
  });

  app.post("/api/menu", function(req, res) {
      menuItemsData.push(req.body);
      res.json(true);
  });

};