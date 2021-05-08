const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.HOST_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}, (err) => {
    if (err) {
        console.log("[Database] - " + err.message)
    } else {
        console.log("[Database] Mongoose -> On!")
    }
})

module.exports = mongoose