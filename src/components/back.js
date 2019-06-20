import React from 'react'
import { Link } from 'react-router-dom'

export default function Back() {
    return (
        <div class="absolute inset-x-0 bottom-0 h-10 z-40 text-left">
            <Link to='/' className='antialiased text-xl pl-10'>←</Link>
        </div>
    )
}
