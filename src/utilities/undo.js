import { prefixes } from '../configs/dataset'
let fs = require('fs');

async function action(input) {
    // remove prefix (hardcoded to 4 currently)
    let slice = await input.name.slice(4)
    // get length of old filename
    let length = input.name.length;
    // get the path to the file, without the file
    let pathWithoutFile = input.path.slice(0,-length)
    // put the new desired filename on the end of the path
    let newPath = pathWithoutFile.concat(slice)

    await rename(input.path, newPath)

}

async function check (input, prefix) {
    return await input.name.startsWith(prefix) ? action(input) : false ;
}

// get individual prefixes and run a check against those
async function undo (input) {
    prefixes.sum.map(prefix => check(input, prefix))
}

async function rename(oldPath, newName){
    fs.rename(`${oldPath}`,`${newName}`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    })
}

export default undo;