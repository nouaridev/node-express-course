const http = require('http')
/**
 * instead of passing a call back u can use the event emitter
 */
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })  

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)
