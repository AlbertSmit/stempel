// This is the entry file, which kicks off all rendering.
//
// We import h() here because that's the function our JSX elements transpile to.
// That is to say - this:
//     <div a="b">foo</div>
// ... is converted to this:
//     h('div', { a: 'b' }, 'foo')

import { h, render } from 'preact';
const { remote } = require('electron')

// import filter
import filter from './utilities/filter'
let fs = require('fs')

// set colour theme REALLY EARLY ON.
function setTheme() {
    const { systemPreferences } = remote
    let theme = systemPreferences.isDarkMode() ? 'dark' : 'light'
    //window.localStorage.setItem('darkmode',theme)
    window.localStorage.os_theme = theme
}

setTheme()

// this holds our rendered root element so we can re-render in response to HMR updates.
let root;

// Making our app's initialization a function means it's repeatable.
function init() {
	// HMR requires that this be a require()
	let App = require('./components/app').default;

	// render the app and save the new root element:
	root = render(<App />, document.body, root);
}


// initial render!
init();


// If this is webpack-dev-server, set up HMR :)
if (module.hot) module.hot.accept('./components/app', init);

// A: Array to temporarily store filenames in:
let fileCollection = []

// A: Load the event listener for drag and drop in electron
document.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('amount of files dropped: ',e.dataTransfer.files.length)

    for (const f of e.dataTransfer.files) {
        filter(f.path, f.name)
        // let newFile = { filename: `"${f.name}"`}
        // fileCollection.push(newFile)
        // console.log(fileCollection)
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});