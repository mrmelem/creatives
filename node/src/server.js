const express = require('express')
const routes = require('./routes')
require('dotenv').config()
require('./configs/mongoose')
const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, function () {
    console.log("[SERVER] is on at https://localhost:3000")
})