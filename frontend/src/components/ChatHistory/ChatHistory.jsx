// ChatHistory.jsx
import React, { Component } from 'react';
import './ChatHistory.css';
import Message from '../Message/Message';

class ChatHistory extends Component {
    render() {
        console.log(this.props.chatHistory);

        // Corrected mapping and rendering of Message components
        const Messages = this.props.chatHistory.map(msg => (
            <Message key={msg.timeStamp} message={msg.data} />
        ));

        return (
            <div className='ChatHistory'>
                <h2>Chat History</h2>
                {Messages}
            </div>
        );
    }
}

export default ChatHistory;
