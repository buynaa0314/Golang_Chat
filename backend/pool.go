
type Pool struct {
	Register   chan *client
	Unregister chan *client
	Clients    map[*Client]bool
	Broadcast  chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[*Client]bool),
		Broadcast:  make(chan Message),
	}

}
func (pool *Pool) Start(){
	for{
		select{
		case client := <-pool.Register:
			pool.Clients[client]=true
			fmt.Println("size of connection pool:" , len(pool.Clients))
			for client, _ := range pool.Clients{
				fmt.Println(client)
				client.Conn.WriteJSON(Message{Type:1, Body:"New User Joined..."})
			}
			break 
		case client := <-pool.Unregister:
			delete(pool.Clients, client)
			fmt.Println("size of connection pool:", len(pool.Clients))
			for client, _ := range pool.Clients{
				fmt.Println(client)
				client.Conn.WriteJSON(Message{Type:1, Body:"User Disconnected..."})
			}
			break 
		case client := <-pool.Broadcast:
			fmt.Println("Sending message to all clinets in the pool"
		 for client, + := range pool.Clinets{
			if err := client.Conn.WriteJSON(message); err !=nil {
				fmt.Println(err)
				return 
			}
		 })

			}
		}
	}
}