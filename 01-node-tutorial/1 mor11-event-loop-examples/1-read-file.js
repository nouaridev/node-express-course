const { readFile } = require('fs')

console.log('started a first task')
// ✅ This is a normal synchronous function
// It goes on the call stack, executes immediately, prints:
// "started a first task"

// CHECK FILE PATH!!!!
readFile('../content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
// ❌ readFile is asynchronous
// It’s sent to Node.js **File System (FS) API** (Web API equivalent)
// Node starts reading the file in the background
// The callback (function(err, result){...}) is registered to run **later**
// Important: readFile returns immediately (returns before completing), so execution continues

console.log('starting next task')
// ✅ This is synchronous, so it prints immediately
// Output so far:
// "started a first task"
// "starting next task"

// Meanwhile, Node is still reading the file in the background...
// When reading is done, the callback is pushed to the **callback queue**

/*
Event Loop Explanation:
1. The call stack is empty after finishing synchronous code.
2. Event loop checks the callback queue.
3. It finds the readFile callback waiting.
4. Moves the callback from queue to stack.
5. Executes callback:
   - Prints file content
   - Prints 'completed first task'
*/

// Final output order in console:
// started a first task
// starting next task
// <contents of first.txt>
// completed first task
