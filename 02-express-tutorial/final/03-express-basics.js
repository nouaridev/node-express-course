// Import the Express framework
// Express simplifies creating HTTP servers compared to using Node's built-in 'http' module
const express = require('express')

// Create an Express application
// 'app' represents our server
const app = express()

// ---------------------- ROUTES ----------------------

// Handle GET requests to the root URL ('/')
// app.get(path, callback)
// - path: the URL endpoint (here it's '/')
// - callback: function(req, res) that handles the request
app.get('/', (req, res) => {
  console.log('user hit the resource') // log every time user visits '/'
  res.status(200).send('Home Page')    // send status 200 (OK) + a response body
})

// Handle GET requests to '/about'
app.get('/about', (req, res) => {
  res.status(200).send('About Page')   // send status 200 with "About Page" text
})

// Handle ALL requests (GET, POST, PUT, DELETE, etc.) to unmatched routes
// '*' means "match any path"
// Useful for handling 404 errors (page not found)
// '*' = catch-all → runs only if nothing above matched
// that's why it doesn’t override '/' or '/about'
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})


app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})


// stoped at 5:03