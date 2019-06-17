import React from 'react'
import { Link } from 'react-router-dom'

import '../index.css'

function settings (e) {
    e.preventDefault()
    e.stopPropagation();
    console.log(e)
}

export default function options() {
    return (
        <div className="options">
        <div className="button rounded-lg font-light text-sm text-center align-middle text-gray-500">Mode</div>
        <div className="button rounded-lg font-light text-sm text-center align-middle text-gray-500">A—Z</div>
        <div 
            className="button rounded-lg font-light text-sm text-center align-middle text-gray-500"
            onClick={(e) => settings(e)}>
                <Link to='/test'>Settings</Link>
        </div>
    </div>
    )
}
