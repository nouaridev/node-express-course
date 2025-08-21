const http = require('http')

// Create a server
// ------------------------------
// http.createServer() takes a callback function (req, res) => {...}
// This callback will NOT run immediately.
// Instead, Node.js registers it with the Web API (the HTTP server).
// Whenever a client makes a request, the Web API pushes the callback
// into the Callback Queue for the Event Loop to execute.
const server = http.createServer((req, res) => {
  // This code runs ONLY when a request arrives.
  console.log('request event')
  res.end('Hello World')
})

// Start listening on port 5000
// ------------------------------
// server.listen() also takes a callback.
// This callback runs once the server is ready to accept requests.
server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})


// ===========================================
// EVENT LOOP FLOW EXPLAINED
// ===========================================

// 1. The program starts.
//    - Call Stack executes top to bottom.
//    - http.createServer(...) registers a request listener in the Web API.
//    - server.listen(...) registers the port listener in the Web API.

// 2. When the OS signals "server is ready", the callback
//    () => console.log('Server listening ...')
//    is sent to the Callback Queue.

// 3. The Event Loop checks: "Is Call Stack empty?"
//    Yes -> moves the callback from Queue to Stack -> executes it.
//    OUTPUT: "Server listening on port : 5000...."

// 4. Later, when a client hits http://localhost:5000
//    - The Web API captures the request.
//    - It sends the request-handler callback (req, res) => {...}
//      into the Callback Queue.

// 5. The Event Loop sees the Stack is empty, moves that callback to Stack.
//    - Executes it: console.log('request event')
//    - Sends "Hello World" back to client.
//    OUTPUT: "request event"

// 6. This cycle repeats for every incoming request.
//    The server stays alive because the Event Loop keeps waiting
//    for new events (never ends until you stop it).
