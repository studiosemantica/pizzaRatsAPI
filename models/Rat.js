const {Schema, model} = require('mongoose')

const RatSchema = new Schema({
    name: String,
    pizza: String
}, {timestamps: true})

const Rat = model("rat", RatSchema)

module.exports = Rat;