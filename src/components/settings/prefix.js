import React, { Component } from 'react'
import '../../index.css'

export default class Prefix extends Component {
    render() {
        return (
            <div className='prefix'>
            <h1 className='antialiased text-xl font-medium text-gray-500 pt-2 pb-4'>Prefix settings</h1>
            <form>
                <label>
                    <input 
                        type='checkbox' 
                        value={this.props.store.get('undo')} 
                        onClick={e => this.props.undoSetting(e)}
                        defaultChecked={this.props.store.get('undo')}>

                        </input>
                    <p className='pl-6 inline antialiased text-sm'>Ignore already prefixed files.</p>
                </label>
            </form>
        </div>
        )
    }
}

