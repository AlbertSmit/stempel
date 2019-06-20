import ignore from './ignore';

let fs = require('fs');
const Store = require('electron-store');
const store = new Store();

async function rename (fullPathname, filename, prefix, group) {
    
    try {
        let pathWithoutFile = fullPathname.replace(filename,'')

        // sending name to API (if online)
        if( navigator.onLine === true && store.get('api') === true) {
            fetch('https://stempel-insight-api.albertsmit.now.sh/api/filenames.js', {
                method: 'post',
                body: JSON.stringify({
                    'filename': filename,
                    'assumpted group': group
                })
            }).then(function(response) {
                return response.json();
            })
        }
        
        // temp ignore
        // await true or false 
        await ignore(filename)

        fs.rename(`${fullPathname}`,`${pathWithoutFile}${prefix}${filename}`, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        })
    }

    catch(e) { console.error(e) }
}

export default rename;