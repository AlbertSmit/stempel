const data = require('../configs/dataset')

// new async function temporarily here.
async function rename (filename, prefix) {
  console.log(prefix,filename)
}

async function filter (input) {
    // take in Array of filenames
    input.reduce((acc, filename) => {
        // make the filenames lowercase
        const lowercase = filename.toLowerCase()
        // 1. take object keys of dataset
        // 2. filter them to see if filenames includes them (without filetype)
        // 3. TODO = add Regex to filter out filetype extension instead
        const category = Object.keys(data).filter(key => 
            data[key].filenames.includes(lowercase.slice(0, filename.length - 4))
        )
    // rename item with async function elsewhere
    rename(filename,data[category].prefix)
    },{});
}

export default filter