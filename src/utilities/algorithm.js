const data = require('../configs/dataset')
const rename = require('./rename')

// new async function temporarily here.
// async function rename (path, filename, prefix, group) {
//   console.log('rename: ',prefix,filename)
// }

async function filter (input) {

    Object.keys(data).filter(group => {
        // setup / easier references
        const lowercase = input.name.toLowerCase().slice(0, input.name.length - 4)
        const instruments = data[group].filenames
        const prefix = data[group].prefix

        // check for a match with includes method
        function check (instruments) {
            return lowercase.includes(instruments) ? rename(input.path, input.name, prefix, group) : null ;
          }

        // map over instruments, call check function
        instruments.map(item => check(item))

        // return nothing so that ES-lint stops whinin'
        return null
    })
}

export default filter