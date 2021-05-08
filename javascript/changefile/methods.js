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

function copy(data, patch) {
    fs.copyFile(data, patch, (err) =>{
        if (err) {
            console.log(err.message)
        }else{
            console.log('Ok!') 
        }
    })
}

module.exports = {
    load,
    save,
    copy
}