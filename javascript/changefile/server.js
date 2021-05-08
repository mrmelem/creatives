const { copy } = require('./methods')

/*
const target = "style.css"
const data = services.load(`./defaults/${target}`)
services.save(data, `../clients/jessica_deluxe/src/services/${target}`)
*/
const src = './data/data.css' 
const dest = './target/data.css'

copy(src,dest)