import rename from './rename'
import { data } from '../configs/dataset'
//import ignore from './ignore';

async function filter (input) {

    Object.keys(data).filter(group => {
        
        // setup / easier references
        const lowercase = input.name.toLowerCase().slice(0, input.name.length - 4)
        const instruments = data[group].filenames
        const prefix = data[group].prefix

        // check for a match with includes method
        function check (instrument) {
            return lowercase.includes(instrument) ? rename(input.path, input.name, prefix, group) : null ;
        }

        // map over instruments, call check function
        instruments.map(instrument => check(instrument))

        // return nothing so that ES-lint stops whinin'
        return null
    })
}

export default filter