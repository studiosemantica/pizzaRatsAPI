const gifs = require("../models/gifs.js");

//INDEX - GETS ALL GIFS
const index = async (req, res) => {
  try {
    const allGifs = await gifs.find({});
    res.status(200).json(allGifs);
  } catch (error) {
    res.status(400).send(error);
  }
};

//CREATE - Makes a new gif
const create = async (req, res) => {
  try {
    const newGifs = await gifs.create(req.body);
    res.status(200).json(newGifs);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update - updates a gif

const update = async (req, res) => {
  try {
    const updatedGifs = await gifs.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedGifs);
  } catch (error) {
    res.status(400).send(error);
  }
};

//destroy - deletes a gif

const destroy = async (req, res) => {
  try {
    const deletedGifs = await gifs.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedGifs);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
    index,
    create,
    update,
    destroy
}
