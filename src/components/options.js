import React from 'react'
import { Link } from 'react-router-dom'

import '../index.css'

function settings (e) {
    e.preventDefault()
    e.stopPropagation();
    console.log(e)
}

function mode (e) {
    if(e === false){
        return 'Default'
    } else {
        return 'Undo'
    }
}

function style (e) {
    if(e.mode === true){
        return {backgroundColor: 'tomato', color: 'white'}
    } else {
        return null
    }
}

export default function Options(props) {
    console.log(props)
    return (
        <div className="options">
            <div 
                className="button rounded-lg font-light text-sm text-center align-middle text-gray-500"
                style={style(props)}
                value={props.mode}
                onClick={(e) => props.onChange(e)}> 
                    {mode(props.mode)}
            </div>

            <div className="button rounded-lg font-light text-sm text-center align-middle text-gray-500">
                <Link to='/failed'>Failures</Link>
            </div>

            <div 
                className="button rounded-lg font-light text-sm text-center align-middle text-gray-500"
                onClick={(e) => settings(e)}>
                    <Link to='/settings'>Settings</Link>
            </div>
        </div>
    )
}
