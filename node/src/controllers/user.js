const jwt = require('jsonwebtoken')
require('dotenv').config()
const key = process.env.KEY

const User = require('../models/user')
const Company = require('../models/company')
const Token = require('../models/token')

async function setUser(data) {
    // Cadastrar User
    // Cadastrar Company
    // Cadastrar Token
}

module.exports = {
    async Create(req, res) {
        let data = await setUser(req.body)
        if (!data) {
            res.status(403).json({ error: "Erro ao cadastrar usuário" })
        } else {
            res.status(200).json(data)
        }
    },
}