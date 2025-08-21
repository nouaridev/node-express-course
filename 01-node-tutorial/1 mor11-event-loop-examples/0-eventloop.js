// ===============================
// LESSON: EVENT LOOP IN JAVASCRIPT
// ===============================

// 1. CALL STACK
// The Call Stack is where JavaScript keeps track of the functions that are being executed.
// Think of it as a pile of plates: the last one you put (Last In) is the first one you take (First Out).

function first() {
  console.log("1️⃣ First function starts");
  second(); // this goes on top of the stack
  console.log("1️⃣ First function ends");
}

function second() {
  console.log("2️⃣ Second function runs");
}

first(); // Start program
// 🔎 OUTPUT:
// 1️⃣ First function starts
// 2️⃣ Second function runs
// 1️⃣ First function ends

// The stack executes functions line by line until it's empty.


// 2. WEB APIs
// Browsers give JavaScript access to extra features (timers, DOM events, fetch requests).
// These do NOT block the Call Stack. They are handled by the browser environment.

// Example: setTimeout is a Web API
console.log("🍳 Start cooking");

setTimeout(() => {
  console.log("⏰ Timer finished (from Web API)");
}, 2000); // this callback goes to Web API, not stack directly

console.log("🥗 Prepare salad");

// 🔎 OUTPUT (order):
// 🍳 Start cooking
// 🥗 Prepare salad
// (after 2s) ⏰ Timer finished (from Web API)


// 3. CALLBACK QUEUE
// After Web API finishes, it sends the callback to the "Callback Queue".
// The queue is like people waiting in line: first in line = first executed.

console.log("📦 Start order");

setTimeout(() => {
  console.log("🚚 Order delivered (from Callback Queue)");
}, 0); // 0 ms still goes to the queue

console.log("🧾 Print receipt");

// 🔎 OUTPUT:
// 📦 Start order
// 🧾 Print receipt
// 🚚 Order delivered (from Callback Queue)


// 4. EVENT LOOP
// The Event Loop is the "manager". It constantly checks:
// - Is the Call Stack empty?
// - If YES, take the first callback from the Queue and put it on the Stack.

// Example with multiple async tasks
console.log("🏁 Start");

setTimeout(() => console.log("⏰ Timer done"), 0);
setTimeout(() => console.log("📨 Another timer"), 0);

console.log("🏁 End");

// 🔎 OUTPUT:
// 🏁 Start
// 🏁 End
// ⏰ Timer done
// 📨 Another timer
//
// Why? Because timers go to Web API -> Queue -> Event Loop -> Stack (after sync code ends)
