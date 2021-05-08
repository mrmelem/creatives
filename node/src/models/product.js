const mongoose = require('mongoose')
const DataSchema = new mongoose.Schema({
    cod: String,
    refer: String,
    title: String,
    slug: String,
    price: mongoose.Decimal128,
    stock: Number,
    descrption: String,
    year: String,
    situation: String,
    installments: [
        { count: Number, fees: mongoose.Decimal128, }
    ],
    images: [
        { ref: String }
    ],
    sizes: [
        { size: String }
    ],
    color: [
        { name: String }
    ]

})

const Products = mongoose.model('tb.products', DataSchema)

module.exports = Products