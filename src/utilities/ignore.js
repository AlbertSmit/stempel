import { prefixes } from '../configs/dataset'

// preliminary prefix-ignore function
// currently under construction
// check input against prefixes; returns true if so.
async function check (input, prefix) {
    return input.startsWith(prefix) ? true : null ;
}

// get individual prefixes and run a check against those
async function ignore (input) {
    prefixes.sum.map(prefix => check(input, prefix))
}


export default ignore;