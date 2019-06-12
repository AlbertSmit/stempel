let fs = require('fs')
// let titleCase = require('./titleCase')

function rename (fullPathname, filename, prefix) {

    // get path without filename
    let pathWithoutFile = fullPathname.replace(filename,'')
    console.log('path without filename: ',pathWithoutFile)

    // rename file and save it
    fs.rename(`${fullPathname}`,`${pathWithoutFile}${prefix} - ${filename}`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    })

}

module.exports = rename