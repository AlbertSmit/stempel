import React from 'react'
import filter from '../utilities/algorithm'

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

    for (const file of e.dataTransfer.files) {
        filter(file)
    }

    //filter(Array.from(e.dataTransfer.files))
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});