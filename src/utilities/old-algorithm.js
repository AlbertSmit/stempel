/* eslint-disable no-unused-expressions */
const { config } = require('../configs/default')
const rename = require('./rename')

async function filter (fullpath, uppercaseFilename) {
    // for( i = 0; i < lowercase.length; i++ ) {
        // rename fn takes: fullpath filename prefix
        try {
            let filename = uppercaseFilename.toLowerCase()

            if(filename.startsWith('a -')) {
                console.log('File already labelled.')
            } else {
                //drums
                filename.includes('kick')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('clap')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('shaker')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('cymbal')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('crash')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('drum')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('cajon')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('conga')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('djembe')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('steelpan')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('tamborim')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
                filename.includes('tambourine')? rename(fullpath, uppercaseFilename, config.drums, 'drums') : null ;
            }

            if(filename.startsWith('b -')) {
                console.log('File already labelled.')
            } else {
                //bass
                filename.includes('bass')? rename(fullpath, uppercaseFilename, config.bass, 'bass') : null ;
            }

            if(filename.startsWith('c -')) {
                console.log('File already labelled.')
            } else {
                //keys
                filename.includes('key')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('piano')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('rhodes')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('accordion')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('celesta')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('clavichord')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('dulcitone')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('harmonium')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('harpsichord')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('orchestron')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('organ')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('spinet')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('virginals')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('mellotron')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('melodica')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('stylophone')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('martenot')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;
                filename.includes('keyboard')? rename(fullpath, uppercaseFilename, config.keys, 'keys') : null ;

            }

            if(filename.startsWith('d -')) {
                console.log('File already labelled.')
            } else {
                //synths
                filename.includes('synth')? rename(fullpath, uppercaseFilename, config.synths, 'synths') : null ;
                filename.includes('korg')? rename(fullpath, uppercaseFilename, config.synths, 'synths') : null ;
            }

            if(filename.startsWith('e -')) {
                console.log('File already labelled.')
            } else {
                //guitars
                filename.includes('guitar')? rename(fullpath, uppercaseFilename, config.guitars, 'guitars') : null ;
            }

            if(filename.startsWith('f -')) {
                console.log('File already labelled.')
            } else {
                // brass
                filename.includes('bugel')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('horn')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('trump')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('bugle')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('cornet')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('cornu')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('tuba')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('saxtuba')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('truba')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('vuvuzela')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
                filename.includes('trombone')? rename(fullpath, uppercaseFilename, config.brass, 'brass') : null ;
            }

            if(filename.startsWith('g -')) {
                console.log('File already labelled.')
            } else {
                //strings
                filename.includes('string')? rename(fullpath, uppercaseFilename, config.strings, 'strings') : null ;
                filename.includes('violin')? rename(fullpath, uppercaseFilename, config.strings, 'strings') : null ;
                filename.includes('cello')? rename(fullpath, uppercaseFilename, config.strings, 'strings') : null ;
                filename.includes('contrabas')? rename(fullpath, uppercaseFilename, config.strings, 'strings') : null ;
                filename.includes('fiddle')? rename(fullpath, uppercaseFilename, config.strings, 'strings') : null ;
            }

            if(filename.startsWith('h -')) {
                console.log('File already labelled.')
            } else {
                //fx
                filename.includes('fx')? rename(fullpath, uppercaseFilename, config.fx, 'fx') : null ;
            }
        }

        catch(e) {
            console.error(e)
        }
    // }
}

module.exports = filter