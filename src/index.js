import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import { remote } from 'electron'

import './index.css';
import './tailwind.css';

import App from './components/app';
import Settings from './components/settings';

import * as serviceWorker from './serviceWorker';

function setTheme() {
    const { systemPreferences } = remote
    let theme = systemPreferences.isDarkMode() ? 'dark' : 'light'
    window.localStorage.os_theme = theme
}

setTheme()

const routing = (
    <Router>
      <>
        <Route exact path="/" component={App} />
        <Route path="/settings" component={Settings} />
      </>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
