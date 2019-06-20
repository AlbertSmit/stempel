import React from 'react'

import TitleBar from '../components/titlebar'
import Failures from './failed/failures';
import Back from './back';

export default function Failed() {
    return (
        <div className="app failed">
            <TitleBar />
            <div class="main-margin">
                <h6 className='antialiased text-sm pb-4'>The following files could not be processed</h6>
                <Failures />
                <Back />
            </div>
        </div>
    )
}
