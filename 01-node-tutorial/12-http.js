// Import the built-in HTTP module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  /**
   * req.url  → The path of the request (e.g., '/', '/about')
   * req      → The request object, contains info like headers, method, url
   * res      → The response object, used to send data back to the client
   * 
   * res.write(data) → Sends a chunk of data to the client but keeps the connection open.
   * res.end(data)   → Sends the final piece of data (optional) and closes the connection.
   * 
   * NOTE:
   * Every HTTP response should eventually end with res.end(),
   * otherwise the browser will keep waiting forever.
   */

  if (req.url === '/') {
    // Send multiple chunks before ending the response
    res.write('Hello - First chunk\n');  // First part
    res.write('Hello again - Second chunk\n'); // Second part
    res.end('Welcome to our home page'); // Final part + closes connection

  } else if (req.url === '/about') {
    // Directly send a single response and end it
    res.end('Here is our short history');

  } else {
    // Send an HTML error page
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back home</a>
    `);
  }
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

/**
 * SUMMARY:
 * - Use res.write() to send partial data without ending the connection.
 * - Use res.end() to send the final data and close the response.
 * - If you only want to send one thing, you can use res.end() directly.
 * - Always make sure to call res.end() eventually, or the request will hang.
 */
