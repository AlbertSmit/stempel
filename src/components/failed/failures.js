import React from 'react'

const failed = ['Kcik.wav', 'Vliolins.wav', 'Giutars.wav']

export default function Failures() {
    return (
        <div>
            {failed.map(file => {
                return(
                <h1 className='antialiased text-5xl font-medium fadeslide'>
                    {file}
                </h1>
                )
            })}
        </div>
    )
}
