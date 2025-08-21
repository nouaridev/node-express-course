// Import createReadStream from fs module
const { createReadStream } = require('fs')

// -------------------------
// WHY USE STREAMS?
// -------------------------
// 1️⃣ Memory efficiency: Streams read files in **small chunks**, not all at once.
//    This allows Node.js to handle very large files without crashing.
// 2️⃣ Event-driven: Streams emit events like 'data', 'end', 'error' as chunks are processed.
// 3️⃣ Flexibility: You can process data piece by piece (e.g., transform, compress, or send over network).

// -------------------------
// TYPE OF STREAM
// -------------------------
// - This is a **Readable Stream** because we are reading data from a file.
// - In Node.js, streams extend **EventEmitter**, so we can listen to events like 'data' and 'error'.
// - Default chunk size: 64 KB (controlled by highWaterMark option).
// - You can customize the chunk size and encoding if needed:
//   const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) // chunk size ~90 KB
//   const stream = createReadStream('./content/big.txt', { encoding: 'utf8' }) // string chunks instead of Buffer

// -------------------------
// CREATE READ STREAM
// -------------------------
const stream = createReadStream('./content/big.txt')

// -------------------------
// EVENTS
// -------------------------

// 'data' event: fired when a chunk of data is available
stream.on('data', (chunk) => {
  console.log(chunk) 
  // chunk is a **Buffer** by default, unless encoding is set
  // You can process, transform, or send this chunk immediately
})

// 'error' event: fired if something goes wrong (file not found, permission denied, etc.)
stream.on('error', (err) => console.log('Error:', err))

// -------------------------
// SUMMARY
// -------------------------
// - Using streams is essential for handling **large files** efficiently.
// - This is a **readable stream**.
// - Streams allow **chunked, event-driven processing**, saving memory and improving performance.
// - You can listen to events like 'data', 'end', 'error' to manage the stream flow.
