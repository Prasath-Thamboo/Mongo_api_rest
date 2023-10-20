const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const { findAllPokemons, findPokemonByPk, createPokemon, updatePokemon, deletePokemon } = require('./src/routes/pokemon-route.js')
const { userLogin } = require('./src/routes/user-route.js')
const { createFirstUser } = require('./src/db/create-first-user.js')
const { authMdlr } = require('./src/middlwares/auth.js')

//mongoose.connect('mongodb://127.0.0.1/pokemon-api-freyja', { useNewUrlParser: true })
mongoose.connect('mongodb+srv://balde:1611@cluster0.habqu.gcp.mongodb.net/pokemon-api-freyja?retryWrites=true&w=majority', { useNewUrlParser: true })


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//createFirstUser()
app.get('/api/pokemons', authMdlr, findAllPokemons)
app.get('/api/pokemon/:id', authMdlr, findPokemonByPk)
app.post('/api/pokemon', authMdlr, createPokemon)
app.put('/api/pokemon/:id', authMdlr, updatePokemon)
app.delete('/api/pokemon/:id', authMdlr, deletePokemon)

app.post('/api/login', userLogin)





app.use((req, res) => res.json({ message: 'notfound' }))

app.listen(3000, () => {
    console.log('App listening on port 3000')
})