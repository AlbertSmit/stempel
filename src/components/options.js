import { h } from 'preact';
const path = require('path')
const { BrowserWindow, systemPreferences } = require('electron').remote

function settings (e) {
    e.preventDefault()
    e.stopPropagation();
    console.log(e)
}

export default () => (
    <div class="options">
        <div class="button rounded-lg font-light text-sm text-center align-middle text-gray-500">Mode</div>
        <div class="button rounded-lg font-light text-sm text-center align-middle text-gray-500">A—Z</div>
        <div 
            class="button rounded-lg font-light text-sm text-center align-middle text-gray-500"
            onClick={(e) => settings(e)}>
                Settings
        </div>
    </div>
);