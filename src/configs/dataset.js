const data = {
    'Drum': {
        'prefix': 'A - ',
        'filenames': [
            'kick', 
            'snare', 
            'tom', 
            'ride', 
            'hihat',
            'clap',
            'drum',
            'cajon',
            'djembe',
            'crash',
            'cymbal',
            'shaker',
            'steelpan',
            'tambourin',
            'tambourine'
        ]
    },
    'Brass': {
        'prefix': 'B - ',
        'filenames': [
            'bugel', 
            'horn', 
            'trumpet',
            'bugle',
            'corner',
            'cornu',
            'tuba',
            'saxtuba',
            'truba',
            'vuvuzela',
            'trombone'
        ]
    },
    'String': {
        'prefix': 'C - ',
        'filenames': [
            'violin', 
            'cello', 
            'contra',
            'fiddle',
            'contrabas'
        ]
    },
    'Guitar': {
        'prefix': 'D - ',
        'filenames': [
            'guitar'
        ]
    },
    'Bass': {
        'prefix': 'E - ',
        'filenames': [
            'bass'
        ]
    },
    'Synth': {
        'prefix': 'F - ',
        'filenames': [
            'synth',
            'korg'
        ]
    },
    'Key': {
        'prefix': 'G - ',
        'filenames': [
            'key',
            'piano',
            'rhodes',
            'accordion',
            'celesta',
            'clavichord',
            'dulcitone',
            'harmonium',
            'harpsichord',
            'orchestron',
            'organ',
            'spinet',
            'virginals',
            'mellotron',
            'melodica',
            'stylophone',
            'martenot',
            'keyboard'
        ]
    },
    'FX': {
        'prefix': 'H - ',
        'filenames': [
            'fx'
        ]
    }
}

// returns array of all possible prefixes (for ignore algorithm)
const prefixes = {
    'sum': Object.keys(data).map(key => data[key].prefix)
}

module.exports = { data, prefixes }