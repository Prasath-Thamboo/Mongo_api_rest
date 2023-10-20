const jwt = require('jsonwebtoken')

const authMdlr = (req, res, next) => {
    const token = req.headers.authorization
    console.log('authorisation header token => ' + token)

    if (!token) {

        const message = `vous n'avez pas fourni de jeton d'authentification necessaire pour acceder aux ressources de l'api`
        return res.status(401).json({ message })
    }

    jwt.verify(token, process.env.PRIVATE_KEY, (error, decodedToken) => {
        if (error) {
            const message = `l'utilisateur n'est pas autorisé à acceder aux ressources`
            return res.status(401).json({ message, data: error })
        }
        const userId = decodedToken.userId
        if (req.body.userId && req.body.userId !== userId) {
            const message = `token invalid `
            return res.status(401).json({ message })
        } else {
            next()
        }
    })
}

module.exports = { authMdlr }