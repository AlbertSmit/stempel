import { h, Component } from 'preact';

export class Settings extends Component {
    render({ }, { checked }) {
        return (
            <label>
                <input type="checkbox" id="testbox" checked='false' onChange={this.toggle}></input>
            </label>
        );
    }
}