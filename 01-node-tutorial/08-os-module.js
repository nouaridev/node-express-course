// Import Node.js's built-in 'os' module
// The 'os' (Operating System) module provides information about the computer's OS
const os = require('os');

// -------------------------------------------------------------
// 1. Get information about the current user of the operating system
// -------------------------------------------------------------
const user = os.userInfo(); // Returns details like username, home directory, shell, etc.
console.log('User Information:', user);

// -------------------------------------------------------------
// 2. Get system uptime (how long the computer has been running)
// -------------------------------------------------------------
// os.uptime() returns the uptime in SECONDS
console.log(`The System Uptime is ${os.uptime()} seconds`);

// -------------------------------------------------------------
// 3. Gather some key details about the operating system
// -------------------------------------------------------------
const currentOS = {
  name: os.type(),        // OS name (e.g., 'Windows_NT', 'Linux', 'Darwin')
  release: os.release(),  // OS version/release
  totalMem: os.totalmem(),// Total system memory in bytes
  freeMem: os.freemem(),  // Available free memory in bytes
};

// Display the collected OS information
console.log('Operating System Info:', currentOS);

/*
📌 NOTES:
- 'os' is a **core module** in Node.js, so you don’t need to install it with npm.
- Memory values (totalMem and freeMem) are given in bytes. 
  You can divide by (1024 * 1024) to convert to MB.
- All these methods provide info about the environment your Node.js app is running on.
*/
// there is another things that you can do with 0s you can search about them 