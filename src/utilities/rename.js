let fs = require('fs');

async function rename (fullPathname, filename, prefix, group) {
    
    try {
        // get path without filename
        let pathWithoutFile = fullPathname.replace(filename,'')

        // sending name to API (if online)
        console.log( 'is device online?: ',navigator.onLine )
        if( navigator.onLine === true) {
            fetch('https://stempel-insight-api.now.sh/api/filenames.js', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    'filename': filename,
                    'assumpted group': group
                })
            }).then(function(response) {
                return response.json();
            })
        }
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