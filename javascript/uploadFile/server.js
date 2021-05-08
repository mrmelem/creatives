const express = require('express')
const cors = require('cors')
const path = require('path')
const multer = require('multer')
const multerConfig = require('./config')

const upload = multer({
    storage: multer.diskStorage({
        destination: "uploads",
        filename: (req, res, callback) => callback(null, file.destination)
    })
})
const app = express()
app.use(cors())
app.use(express.json())

app.post('/file', multer().single('file'), (req, res) => {
    console.log(req.file.path)
})

app.listen(3000, () => {
    console.log("Ok!")
})