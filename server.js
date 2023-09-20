const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");


const fruits = require("./models/fruits.js");
const vegetables = require("./models/vegetables.js");

// adding our view templates:
// always above the routes
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});


// Index route - All the fruits
// fruits route
app.get("/fruits/", (req, res) => {
  // res.send(fruits);
  res.render("fruits/Index", { fruits: fruits });
});


app.get('/fruits/new', (req, res) => {
  res.render('fruits/New')
})

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect("/fruits");
  console.log(fruits);
});

// Show route - one particular fruit by ID
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render(
    "fruits/Show",
    { fruit: fruits[req.params.indexOfFruitsArray] }
  );
});

//------ vegetables route -------//
app.get("/vegetables/", (req, res) => {
  res.render("vegetables/Index", { vegetables: vegetables });
});

app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

app.post("/vegetables", (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat) {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  vegetables.push(req.body);
  res.redirect("/vegetables");
  console.log(vegetables);
});

app.get("/vegetables/:indexVegetablesArray", (req, res) => {
  res.render("vegetables/Show", {
    vegetable: vegetables[req.params.indexVegetablesArray],
  });
});

app.listen(3000, () => {
  console.log("listening");
});
