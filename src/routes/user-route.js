const UserModel = require("../models/user.js")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const userLogin = async (req, res) => {
    try {
        //check username
        const user = await UserModel.findOne({ username: req.body.username })
        if (!user) {
            const message = `il n'existe pas d'utilisateur avec le username ${req.body.username}`
            return res.status(404).json({ message })
        }
        //check password
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordValid) {
            const message = `le mot de passe de l'utilisateur est incorrect`
            return res.status(401).json({ message })
        }
        //jwt
        const token = await jwt.sign(
            { idUser: user._id, uName: user.username },
            process.env.PRIVATE_KEY,
            { expiresIn: '2h' }
        )
        const message = `l'utilisateur a été trouvé et connecté avec succes`
        return res.json({ message, data: user, token })
    } catch (error) {
        const message = `erreur lors de l'exec de la requete login ${error}`
        return res.status(500).json({ message })
    }
}

module.exports = { userLogin }