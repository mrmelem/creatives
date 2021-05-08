const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name: String,
    premium: Boolean,
    themes: [
        { name: String }
    ]
})

const Data = mongoose.model('tb.models', DataSchema)

module.exports = Data