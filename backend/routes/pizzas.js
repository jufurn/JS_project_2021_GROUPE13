var express = require("express");
const { Pizzas } = require("../model/pizzas");

var router = express.Router();
const pizzaModel = new Pizzas();

// GET /pizzas : read all the pizzas from the menu
router.get("/", function (req, res) {
  console.log("GET /pizzas");
  return res.json(pizzaModel.getAll());
});

// GET /pizzas/{id} : Get a pizza from its id in the menu
router.get("/:id", function (req, res) {
  console.log(`GET /pizzas/${req.params.id}`);

  const pizza = pizzaModel.getOne(req.params.id);
  // Send an error code '404 Not Found' if the pizza was not found
  if (!pizza) return res.status(404).end();

  return res.json(pizza);
});

// POST /pizzas : create a pizza to be added to the menu.
router.post("/", function (req, res) {
  console.log("POST /pizzas");

  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty("title") && req.body.title.length === 0) ||
    (req.body.hasOwnProperty("content") && req.body.content.length === 0)
  )
    return res.status(400).end();

  const pizza = pizzaModel.addOne(req.body);

  return res.json(pizza);
});

// DELETE /pizzas/{i} : delete a pizza from the menu
router.delete("/:id", function (req, res) {
  console.log(`DELETE /pizzas/${req.params.id}`);

  const pizza = pizzaModel.deleteOne(req.params.id);
  // Send an error code '404 Not Found' if the pizza was not found
  if (!pizza) return res.status(404).end();
  return res.json(pizza);
});

// PUT /pizzas/{id} : update a pizza at id
router.put("/:id", function (req, res) {
  console.log(`PUT /pizzas/${req.params.id}`);
  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    (req.body.hasOwnProperty("title") && req.body.title.length === 0) ||
    (req.body.hasOwnProperty("content") && req.body.content.length === 0)
  )
    return res.status(400).end();

  const pizza = pizzaModel.updateOne(req.params.id, req.body);
  // Send an error code 'Not Found' if the pizza was not found :
  if (!pizza) return res.status(404).end();
  return res.json(pizza);
});

module.exports = router;
