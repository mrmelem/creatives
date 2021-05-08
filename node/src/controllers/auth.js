const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.KEY

module.exports = {
    async loggin(req, res) {
        const { username, key } = req.body;
        if (!username || !key) {
            res.status(403).json({ error: "Campos vazios não são permitidos!" })
        } else {
            let user = await Token.findOne({ username })
            if (user) {
                let result = bcrypt.compareSync(key, user.key)
                if (result) {
                    const { _id } = user
                    const payload = { usernamem, _id }
                    const token = jwt.sign(payload, secret, { expiresIn: '24h' })
                    res.cookie('token', token, { httpOnly: true })
                    res.status(200).json({ auth: true, token, })
                } else {
                    res.status(403).json({ error: "User not found" })
                }
            } else {
                res.status(403).json({ error: "User not found" })
            }
        }
    }
}