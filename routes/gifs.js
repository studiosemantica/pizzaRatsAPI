const express = require("express");
const gifRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/gifs.js");

//ROUTES!

//get all Gifs
gifRouter.get("/", index);

//create a new Gif
gifRouter.post("/", create);

//updating a Gif
gifRouter.put("/:id", update);

//destroy a Gif
gifRouter.delete("/:id", destroy);

module.exports = gifRouter;
