var socket = new WebSocket('ws://localhost:9000/ws');

let connect = (cb) => {
    console.log("Connecting");

    socket.onopen = () =>{
        console.log("Successful");
    }

    socket.onmessage = (msg) =>{
        console.log("Message from Socket: ", msg);
    }

    socket.onclose = (event) =>{
        console.log("Connection Ended", event);
    }

    socket.onerror = (error) =>{
        console.log("Connection Error", error);
    }
};

let sendMsg = (msg) =>{
    console.log("sending message: ", msg);
    socket.send(msg);
}

export {connect, sendMsg};