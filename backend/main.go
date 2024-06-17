package main

import (
	"fmt"
	"net/http"

	"github.com/buynaa0314/Golang_Chat/package/websocket"
)

func serverWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("websocket endpoint reached")

	conn, err := websocket.Upgrade(w, r)

	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
		return
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serverWS(pool, w, r)
	})

	fmt.Println("Server running on :9000")
	http.ListenAndServe(":9000", nil)
}

func main() {
	fmt.Println("Buynaa's full stack chat project")
	setupRoutes()
}
