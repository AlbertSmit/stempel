const config = require('./config')
const rename = require('./rename')

function filter (fullpath, uppercaseFilename) {
    // for( i = 0; i < lowercase.length; i++ ) {
        // rename fn takes: fullpath filename prefix

        let filename = uppercaseFilename.toLowerCase()

        // brass
        filename.includes('bugel')? rename(fullpath, uppercaseFilename, config.brass) : null ;
        filename.includes('horn')? rename(fullpath, uppercaseFilename, config.brass) : null ;
        filename.includes('trump')? rename(fullpath, uppercaseFilename, config.brass) : null ;

        //drums
        filename.includes('kick')? rename(fullpath, uppercaseFilename, config.drums) : null ;
        filename.includes('clap')? rename(fullpath, uppercaseFilename, config.drums) : null ;
        filename.includes('shaker')? rename(fullpath, uppercaseFilename, config.drums) : null ;
        filename.includes('cymbal')? rename(fullpath, uppercaseFilename, config.drums) : null ;
        filename.includes('crash')? rename(fullpath, uppercaseFilename, config.drums) : null ;

        //bass
        filename.includes('bass')? rename(fullpath, uppercaseFilename, config.bass) : null ;

        //keys
        filename.includes('key')? rename(fullpath, uppercaseFilename, config.keys) : null ;
        filename.includes('piano')? rename(fullpath, uppercaseFilename, config.keys) : null ;
        filename.includes('rhodes')? rename(fullpath, uppercaseFilename, config.keys) : null ;

        //synths
        filename.includes('synth')? rename(fullpath, uppercaseFilename, config.synths) : null ;
        
        //guitars
        filename.includes('guitar')? rename(fullpath, uppercaseFilename, config.guitars) : null ;

        //strings
        filename.includes('string')? rename(fullpath, uppercaseFilename, config.strings) : null ;
        filename.includes('violin')? rename(fullpath, uppercaseFilename, config.strings) : null ;
        filename.includes('cello')? rename(fullpath, uppercaseFilename, config.strings) : null ;
        filename.includes('contrabas')? rename(fullpath, uppercaseFilename, config.strings) : null ;

        //fx
        filename.includes('fx')? rename(fullpath, uppercaseFilename, config.fx) : null ;
    // }
}

module.exports = filter