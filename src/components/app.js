import { h, Component } from 'preact';

import '../styles.css';

import Hello from './hello';
import Landing from './landing';
import TitleBar from './titlebar';

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
                <TitleBar />
                <div class="main-margin">
                    <Landing />
                    <Hello />
                </div>
            </div>
        );
    }
}