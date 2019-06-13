import { h, Component } from 'preact';

import Hello from './hello';
import Landing from './landing';

//->
// create notification 
// myNotification = () => { new Notification('Stempel', {
//     body: 'Stem marking finished.'
//     })
// }

export default class App extends Component {
    render() {
        return (
            <div class="app">
                <Landing />
                <Hello />
            </div>
        );
    }
}