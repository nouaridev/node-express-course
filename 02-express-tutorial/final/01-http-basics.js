// Import the built-in 'http' module from Node.js
// No need to install it, it comes with Node.js core
const http = require('http')

const server = http.createServer((req, res) => {
  // Get the requested URL path (e.g., '/', '/about', etc.)
  const url = req.url

  // ----------------- HOME PAGE -----------------
  if (url === '/') {
    /**
     * res.writeHead(statusCode, headersObject)
     * - statusCode: tells the browser whether the request succeeded (200 = OK)
     * - headersObject: contains response headers (meta info about response)
     *   Example: 'content-type' defines what kind of data we're sending
     *   - 'text/plain': plain text (no HTML formatting)
     *   - 'text/html': HTML formatted content
     *   - 'application/json': JSON data
     * Without setting this correctly, the browser may display raw code incorrectly.
     */
    res.writeHead(200, { 'content-type': 'text/plain' }) 
    // ⚠ Here, although we wrote 'text/plain', we are sending HTML (<h1> tag).
    // Normally it should be 'text/html' so the browser renders it properly.
    res.write('<h1>home page</h1>')
    res.end() // end the response (important, otherwise browser keeps waiting)
  }

  // ----------------- ABOUT PAGE -----------------
  else if (url === '/about') {
    // Here we use 'text/html' because we are sending HTML code
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }

  // ----------------- 404 (NOT FOUND) -----------------
  else {
    // If the requested URL does not match '/', or '/about'
    // Send a 404 response (page not found)
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

// Make the server listen on port 5000
// You can access it at http://localhost:5000
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})
