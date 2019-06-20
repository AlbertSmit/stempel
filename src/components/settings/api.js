import React, { Component } from 'react'
import '../../index.css'

export default class API extends Component {
    render() {
        return (
            <div className='api'>
            <h1 className='antialiased text-xl font-medium text-gray-500 pt-2 pb-4'>API settings</h1>
            <form>
                <label>
                    <input 
                        type='checkbox' 
                        value={this.props.store.get('api')} 
                        onClick={e => this.props.apiSetting(e)}
                        defaultChecked={this.props.store.get('api')}>

                        </input>
                    <p className='pl-6 inline antialiased text-sm'>Send filenames to API for improved future algorithm.</p>
                </label>
            </form>
        </div>
        )
    }
}

