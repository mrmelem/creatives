const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name_company: String,
    SEO: String,
    document: String,
    uf: String,
    city: String,
    line_business: String,
}, {
    timestamps: true
})

const Model = mongoose.model('tb_admin.company.c1', DataSchema)

module.exports = Model