const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PizzaSchema = new Schema(
  {
    name: String,
    toppings: [String],
  },
  { timestamps: true }
);

const Pizza = model('pizza', PizzaSchema)

module.exports = Pizza