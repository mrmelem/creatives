const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const DataSchema = new mongoose.Schema({
    username: String,
    key: String,
    refer_user: String,
    refer_company: String,
    refer_provisory_company: String,
}, {
    timestamps: true
})

DataSchema.pre('save', function (next) {
    if (!this.isModified("key")) {
        return next()
    }

    this.key = bcrypt.hashSync(this.key, 10)
    next();
})

const Tokens = mongoose.model('tb_admin.tokens', DataSchema)

module.exports = Tokens