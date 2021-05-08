const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    user_type: Number,
}, {
    timestamps: true
})

const User = mongoose.model('tb_admin.users', DataSchema)

module.exports = User