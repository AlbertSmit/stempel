import React from 'react'

import TitleBar from '../components/titlebar'
import API from './settings/api'
import Prefix from './settings/prefix';
import Back from  './back';

const Store = require('electron-store');
const store = new Store();

//
function apiSetting(e) {
    let current = store.get('api')
    store.set('api', !current)
}

//
export default function Settings() {
    return (
        <div className="app">
            <TitleBar />
            <div class="main-margin">
                <h1 className='antialiased text-5xl font-medium fadeslide'>Settings</h1>
                <API store={store} apiSetting={apiSetting}/>
                <Prefix store={store} />
                <Back />
            </div>
        </div>
    )
}
