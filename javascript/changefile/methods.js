const fs = require('fs')

function load(path) {
    return fs.readFileSync(path, 'utf-8')
}

function save(data, path) {
    fs.writeFile(path, data, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Sucess')
        }
    })
}

module.exports = {
    load,
    save
}