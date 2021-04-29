const services = require('./methods')
const target = "style.css"
const data = services.load(`./defaults/${target}`)
services.save(data, `../clients/jessica_deluxe/src/services/${target}`)