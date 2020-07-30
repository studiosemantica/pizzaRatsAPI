const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gifSchema = new Schema(
  {
    "name": String,
    "url": String,
  },
  { timestamps: true }
);

const gifs = model('gifs', gifSchema)

module.exports = gifs