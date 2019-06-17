import React from 'react'
import { Link } from 'react-router-dom'

import TitleBar from '../components/titlebar'

export default function test() {
    return (
        <div className="app">
            <TitleBar />
            <div class="main-margin justify-center">
                <h1 className='antialiased text-5xl font-medium'>Temporary Settings</h1>
                <h1>Watch this space.</h1>
                <Link to='/'>Go back.</Link>
            </div>
        </div>
    )
}
