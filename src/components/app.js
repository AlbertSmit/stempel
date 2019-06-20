import React, { Component } from 'react'
import { ipcRenderer } from 'electron'

import Options from './options';
import Landing from './landing';
import TitleBar from './titlebar';
import LandPad from './landpad';
import Footer from './footer';

import '../index.css'

const Store = require('electron-store');
const store = new Store();

export default class App extends Component {

    state = {
        undo: store.get('mode')
    }

    componentDidMount(){
        store.set('mode', 'false')
    }

    optionChange = () => {
        this.setState({ undo: !this.state.undo })
        store.set('undo', !this.state.undo)
    }

    render() {
        return (
            <div className="app">
                <TitleBar />
                <div className="main-margin justify-center">
                    <Options mode={this.state.undo} onChange={this.optionChange} />
                    <Landing />
                    <LandPad />
                    <Footer />
                </div>
            </div>
        )
    }
}

ipcRenderer.on('ping', (e, m) => {
    console.log('ping!')
})