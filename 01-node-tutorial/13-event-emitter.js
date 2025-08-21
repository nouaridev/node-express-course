// Import the EventEmitter class from the 'events' module
// You can create your own instance or extend it for custom classes
const EventEmitter = require('events')

// Create a new EventEmitter instance
const customEmitter = new EventEmitter()

// --------------------------------------------------
// Register event listeners using 'on'
// 'on' allows multiple callbacks for the same event
// Callbacks can accept additional arguments passed during 'emit'

// First listener for 'response' event
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id: ${id}`)
  // ✅ This runs when 'response' is emitted
  // Output here: "data received user john with id: 34"
})

// Second listener for the same 'response' event
customEmitter.on('response', () => {
  console.log('some other logic here')
  // ✅ Also runs when 'response' is emitted
  // Output here: "some other logic here"
})


// --------------------------------------------------
// Emit the event 'response' with additional arguments
customEmitter.emit('response', 'john', 34)
// ✅ This triggers all listeners registered for 'response'
// Order matters: listeners are called in the order they were added

/* 
--- What is happening here ---
1. customEmitter.on(...) registers listeners for 'response'.
2. customEmitter.emit('response', 'john', 34) triggers all registered listeners.
3. Each listener receives arguments passed in emit ('john' and 34).
4. Node executes them in order of registration.

--- Output ---
data received user john with id: 34
some other logic here

--- Benefits of using EventEmitter ---
1. **Decoupling:** Different parts of your code can react to events without tightly coupling logic.
1. **الفصل:** يمكن لأجزاء مختلفة من الكود الخاص بك أن تتفاعل مع الأحداث دون ربط المنطق بشكل وثيق.
2. **Multiple listeners:** You can register multiple handlers for the same event.
3. **Order control:** Handlers run in the order they were registered.
4. **Flexibility:** You can pass arguments to handlers easily.
5. **Used in Node.js core:** Many built-in modules like HTTP, streams, and FS use EventEmitter.
6. **Custom events:** You can create your own events for cleaner, reactive code.

*/
