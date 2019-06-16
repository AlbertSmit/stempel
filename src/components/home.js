import { h, Component } from 'preact';

import '../styles.css';

import Options from './options';
import Landing from './landing';
import TitleBar from './titlebar';
import LandPad from './landpad';
import Footer from './footer';

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
                <div class="main-margin justify-center">
                    <Options />
                    <Landing />
                    <LandPad />
                    <Footer />
                </div>
            </div>
        );
    }
}