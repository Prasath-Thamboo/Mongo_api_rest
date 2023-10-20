const PokemonModel = require('../models/pokemon.js')

const findAllPokemons = async (req, res) => {
    const pokemon = await PokemonModel.find({})
    return res.json({ message: "all pokemon request", data: pokemon })
}

const findPokemonByPk = async (req, res) => {
    const pokemon = await PokemonModel.findOne({ _id: req.params.id })
    return res.json({ message: "request ok", data: pokemon })
}

const createPokemon = async (req, res) => {
    const pokemon = await PokemonModel.create(req.body)
    return res.json({ message: "request ok", data: pokemon })
}

const updatePokemon = async (req, res) => {
    const pokemon = await PokemonModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    res.json({ message: "request ok", data: pokemon })
}

const deletePokemon = async (req, res) => {
    const pokemon = await PokemonModel.findById({ _id: req.params.id })
    await PokemonModel.deleteOne({ _id: req.params.id })
    return res.json({ message: "request ok", data: pokemon })
}

module.exports = { findAllPokemons, findPokemonByPk, createPokemon, updatePokemon, deletePokemon }