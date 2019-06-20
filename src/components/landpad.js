import React from 'react'
import filter from '../utilities/algorithm'
import undo from '../utilities/undo';

const Store = require('electron-store');
const store = new Store();

export default function Landpad(props) {
    return (
        <div id='landpad' className="landpad justify-center rounded-lg shadow-xl">
        
        </div>
    )
}

// A: Load the event listener for drag and drop in electron
document.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();

    let mode = store.get('undo')

    for (const file of e.dataTransfer.files) {
        // if file undo is set to TRUE, undo.
        mode ? undo(file) : filter(file) ;
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});