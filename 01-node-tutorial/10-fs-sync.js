const fs = require('fs');

console.log('start');

// Read first file (sync)
const first = fs.readFileSync('./content/first.txt', 'utf8');
// Read second file (sync)
const second = fs.readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// Write to a file (sync)
fs.writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}\n`,
  { flag: 'a' } 
  // -------------------- FLAGS --------------------
  // { flag: 'w' } → Write (default), overwrites file if exists
  // { flag: 'a' } → Append, adds content to the end of file
  // { flag: 'wx' } → Write only if file does NOT exist (fails otherwise)
  // { flag: 'ax' } → Append only if file does NOT exist (fails otherwise)
  // { flag: 'r+' } → Open for reading and writing (error if file doesn't exist)
);

console.log('done with this task');
console.log('starting the next one');


/**
 * the problem with sync is if two users accessing our server the seconde will 
 * wait for the first to comp lete 
 */