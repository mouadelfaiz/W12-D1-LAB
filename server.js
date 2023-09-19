const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");

// data
// const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const fruits = require("./models/fruits.js");
const vegetables = require("./models/vegetables.js");

// adding our view templates:
// always above the routes
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Index route - All the fruits
// fruits route
app.get("/fruits/", (req, res) => {
  // res.send(fruits);
  res.render("fruits/Index", { fruits: fruits });
});

// Show route - one particular fruit by ID
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render(
    "fruits/Show", // second param must be an object
    { fruit: fruits[req.params.indexOfFruitsArray] }
  );
});

// vegetables route
app.get("/vegetables/", (req, res) => {
  res.render("vegetables/Index", { vegetables: vegetables });
});

app.get("/vegetables/:indexVegetablesArray", (req, res) => {
  res.render("vegetables/Show", {
    vegetable: vegetables[req.params.indexVegetablesArray],
  });
});

app.listen(3000, () => {
  console.log("listening");
});
