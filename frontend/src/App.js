import React, { Component } from 'react';
import Header from './Components/Header/Header';
import ChatHistory from './Components/ChatHistory/ChatHistory';
import ChatInput from './Components/ChatInput/ChatInput';
import './App.css';

import { connect, sendMsg } from './API';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatHistory: []
        };
    }

    componentDidMount() {
        connect((msg) => {
            console.log("New Message");
            this.setState(prevState => ({
                chatHistory: [...prevState.chatHistory, msg] 
            }));
            console.log(this.state);
        });
    }

    // Function to send message
    send = (event) => {
        if (event.key === "Enter") {
            sendMsg(event.target.value);
            event.target.value = "";
        }
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <ChatHistory chatHistory={this.state.chatHistory} /> {/* Corrected prop name */}
                <ChatInput send={this.send} /> {/* Pass the send function */}
            </div>
        );
    }
}

export default App;
