import React from 'react'
import filter from '../utilities/filter'

export default function landpad() {
    return (
        <div id='landpad' className="landpad justify-center rounded-lg shadow-xl">
        
        </div>
    )
}

// A: Load the event listener for drag and drop in electron
document.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('amount of files dropped: ',e.dataTransfer.files.length)

    for (const f of e.dataTransfer.files) {
        filter(f.path, f.name)
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});