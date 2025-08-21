// Import modules
var http = require('http')
var fs = require('fs')

// Create an HTTP server
http.createServer(function (req, res) {
  // -------------------------
  // Why NOT use readFileSync?
  // -------------------------
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)
  // - This blocks the entire event loop while reading the file.
  // - Server cannot handle other requests until the file is fully read.
  // - Bad for large files or multiple simultaneous users.

  // -------------------------
  // Use a Readable Stream instead
  // -------------------------
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
  // - This creates a **readable stream**.
  // - Data is read in small chunks (default 64KB) instead of all at once.
  // - Non-blocking: Node can handle other requests while streaming.

  // 'open' event: stream is ready to be read
  fileStream.on('open', () => {
    // Pipe the stream directly to the response
    // - Automatically handles 'data' events and sends chunks to the client
    // - Efficient and memory-friendly
    fileStream.pipe(res)
  })

  // 'error' event: handle file errors (not found, permission issues, etc.)
  fileStream.on('error', (err) => {
    res.end(`Error: ${err}`)
  })
})
.listen(5000, () => {
  console.log('Server listening on port 5000')
})

/* 
--- Key Points ---
1. fs.createReadStream() creates a readable stream for the file.
2. Streams are **non-blocking** and emit events like 'open', 'data', 'error'.
3. fileStream.pipe(res) sends data to the client **chunk by chunk**, 
   without loading the entire file into memory.
4. Using streams allows the server to handle **large files** and **multiple users** efficiently.
*/
// search about the other types of streams