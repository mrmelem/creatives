const jwt = require('jsonwebtoken')
const key = process.env.KEY

function authJWT(token) {
    return jwt.verify(token, key, (err, data) => {
        if (err) return false; else return data
    })
}

module.exports = {
    async getAuth(req, res, next) {
        const token = req.query.token
        if (!token) {
            res.status(401).json({ error: "Unauthorized" })
        } else {
            let verify = await authJWT(token)
            if (!verify) {
                res.status(401).json({ error: "Unauthorized" })
            } else {
                next()
            }
        }
    },
    async postAuth(req, res, next) {
        const { token } = req.body
        if (!token) {
            res.status(401).json({ error: "Unauthorized" })
        } else {
            let verify = await authJWT(token)
            if (!verify) {
                res.status(401).json({ verify })
            } else {
                next()
            }
        }
    }
}