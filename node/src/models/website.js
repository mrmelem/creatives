const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    refer: String,
    theme_id: String,
    model_id: String
})

const Website = mongoose.model('tb.websites', DataSchema)

module.exports = Website