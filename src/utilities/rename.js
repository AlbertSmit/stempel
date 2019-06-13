let fs = require('fs')

async function rename (fullPathname, filename, prefix) {
    
    try {
        // get path without filename
        let pathWithoutFile = fullPathname.replace(filename,'')

        // rename file and save it
        fs.rename(`${fullPathname}`,`${pathWithoutFile}${prefix} - ${filename}`, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        })
    }

    catch(e) {
        console.error(e)
    }

}

module.exports = rename