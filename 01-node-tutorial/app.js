const http = require('http');

const server = http.createServer((req, res) => {
  // -----------------------------
  // req = the HTTP request sent by the client (browser, app, etc.)
  // -----------------------------
  
  // req has 2 main parts:
  // 1. Headers: metadata about the request
  //    - Example: { "User-Agent": "Chrome", "Accept": "text/html" }
  // 2. Body: the actual data sent by client (for POST/PUT requests)
  //    - Example: a form submission like { username: "Nouari" }

  console.log('Request Headers:', req.headers);
  // console.log('Request Body:', ...)  // we need to collect chunks for POST data

  // -----------------------------
  // res = the HTTP response we send back to the client
  // -----------------------------

  // res has 2 main parts:
  // 1. Headers: metadata about the response
  //    - Example: { "Content-Type": "text/html", "Content-Length": 123 }
  res.setHeader('Content-Type', 'text/plain'); // we set the response header

  // 2. Body: the actual content/data sent back
  //    - Example: 'Hello World' or JSON data
  res.end('Hello World'); // send the response body and finish

  // -----------------------------
  // Summary:
  // - Client sends a Request (headers + optional body)
  // - Server reads the request
  // - Server sends a Response (headers + body)
  // - Browser/client displays or handles the response
  // -----------------------------
});

server.listen(5000, () => {
  console.log('Server listening on port 5000...');
});


// the last sesstion we stopped at 3:55