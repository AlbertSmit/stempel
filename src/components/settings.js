import React from 'react'
import { Link } from 'react-router-dom'

import TitleBar from '../components/titlebar'
import API from './settings/api'
import Prefix from './settings/prefix';

export default function Settings() {
    return (
        <div className="app">
            <TitleBar />
            <div class="main-margin">
                <h1 className='antialiased text-5xl font-medium'>Settings</h1>
                <API />
                <Prefix />
                <Link to='/'>Go back.</Link>
            </div>
        </div>
    )
}
