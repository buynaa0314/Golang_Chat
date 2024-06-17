
import React , {component} from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import './App.css';
import { connect, sendMsg } from 'http2';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            ChatHistory: []
        }
    }

    componentDidMount(){
        connect 
    }
}