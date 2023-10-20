const mongoose = require('mongoose')

//mongoose Schema
const Schema = mongoose.Schema;

//pokemon schema
const PokemonSchema = new Schema({
    name: String,
    hp: Number,
    cp: Number,
    picture: String,
    types: [String],
    created: {
        type: Date,
        default: new Date()
    }
})

//model
const PokemonModel = mongoose.model('pokemon', PokemonSchema)

//export
module.exports = PokemonModel