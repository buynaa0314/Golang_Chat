
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
        connect((msg) => {
            console.log("New Message")
            this.setState(prevState => ({
                ChatHistory : [...prevState.ChatHistory, msg]
            }))
            console.log(this.state);

        }) 
    }
    render(){
        return(
            <div className="App">
                <Header/>
                <ChatHistory chatHistory={this.state.chatHistory}/>
                <ChatInput send={this.send}/>
            </div>
        )
    }
}

export default App;