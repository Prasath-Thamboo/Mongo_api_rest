const bcrypt = require('bcrypt')
const User = require('../models/user.js')

const createFirstUser = async () => {
    const hash = await bcrypt.hash('pikachu', 10)
    try {
        const user = await User.create(
            {
                username: 'pikachu',
                password: hash
            }
        )
        console.log(`creation de l'utilisateur admin ${user}`)
    } catch (error) {
        console.log(`erreur lors de la creation de l'utilisateur admin => ${error}`)
    }
}

module.exports = { createFirstUser }