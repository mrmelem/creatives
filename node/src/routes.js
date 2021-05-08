const express = require('express')
require('dotenv').config()
const app = express.Router()
const { getAuth, postAuth } = require('./middleware')

// Importação dos controllers
const User = require('./controllers/user')
const Auth = require('./controllers/auth')
const Product = require('./controllers/products')
const Themes = require('./controllers/themes')
const Filiation = require('./controllers/filiation')

// Rotas Públicas
app.post('/api/user', User.Create)


// Rotas Protegidas
app.get('/', getAuth)





module.exports = app