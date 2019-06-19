let fs = require('fs');

async function rename (fullPathname, filename, prefix, group) {
    
    try {
        // get path without filename
        let pathWithoutFile = fullPathname.replace(filename,'')

        // API off toggle
        let enabled = false
        // sending name to API (if online)
        if( navigator.onLine === true && enabled === true) {
            fetch('https://stempel-insight-api.now.sh/api', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
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
        fs.rename(`${fullPathname}`,`${pathWithoutFile}${prefix}${filename}`, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        })
    }

    catch(e) {
        console.error(e)
    }

}

module.exports = rename