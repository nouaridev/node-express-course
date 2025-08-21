// setInterval is asynchronous
setInterval(() => {
  console.log('hello world') 
  // ✅ This callback will run repeatedly every 0ms
  // It does NOT execute immediately. It is scheduled in the Timer phase of Node's event loop.
  // The callback will wait in the callback queue until the call stack is empty.
}, 0)

// Synchronous code runs immediately
console.log(`I will run first`) 
// ✅ Goes on the call stack, executes immediately
// Output so far:
// I will run first

// Event Loop Explanation:
// 1. The call stack finishes the synchronous code.
// 2. Event loop checks the callback queue.
// 3. The setInterval callback is pushed onto the call stack.
// 4. Executes console.log('hello world')
// 5. Because it's setInterval, it repeats indefinitely every ~0ms (as soon as stack is free)

// Node process stays alive because setInterval keeps scheduling callbacks
// To stop it, use CTRL + C or an unexpected error occurs.
