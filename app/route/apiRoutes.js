
//requiring data from recipes.js file
var recipesData = require("../data/Recipes");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
     app.get("api/Allrecipes", function(req, res) {
       res.json(recipesFiles);
     });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.

app.post("/api/recipeFound", function(req, res) {

//Show client what recipe matches their survey best

});

};