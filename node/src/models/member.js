const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name: String,
    pix: String,
    refer: String,
    email: String,
    cpf: String,
    contact: String
}, {
    timestamps: true
})

const Model = mongoose.model('tb.vendors.s1', DataSchema)

module.exports = Model