import React, { Component } from 'react'

import Options from './options';
import Landing from './landing';
import TitleBar from './titlebar';
import LandPad from './landpad';
import Footer from './footer';

import '../index.css'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <TitleBar />
                <div class="main-margin justify-center">
                    <Options />
                    <Landing />
                    <LandPad />
                    <Footer />
                </div>
            </div>
        )
    }
}
