const express = require("express")
const RatRouter = express.Router()
const {index, create, update, destroy} = require("../controllers/Rat.js")

//Get all Rats
RatRouter.get("/", index)

//Create New Rats
RatRouter.post("/", create)

//Update a rat
RatRouter.put("/:id", update)

//Destroy a Rat
RatRouter.delete("/:id", destroy)

module.exports = RatRouter