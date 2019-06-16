import { h, Component } from 'preact';

// export default () => (
//     <div>
//         <input type="checkbox" id="testbox" onChange={() => console.log('something changed! ',checkBox.checked)}></input>
//         <label for="testbox" class="hello antialiased">Test</label>
//     </div>
// );

class Settings extends Component {
    toggle(e) {
        e.preventDefault();   // we'll handle this, thanks
        console.log('toggle checked: ',e.target.checked)

        //window.localStorage.setItem('key', 'value')
        
        // let checked = !this.state.checked;
        // this.setState({ checked });
    }
    render({ }, { checked }) {
        return (
            <label>
                <input type="checkbox" id="testbox" checked='false' onChange={this.toggle}></input>
            </label>
        );
    }
}

export default Settings;