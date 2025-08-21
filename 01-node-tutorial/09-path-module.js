// =======================================
// 1️⃣ Import built-in modules
// =======================================
const path = require('path'); // Handle paths
const fs = require('fs');     // Handle files

console.log('Path separator for this OS:', path.sep);
// Windows → '\', Linux/macOS → '/'

// =======================================
// 2️⃣ PATH.JOIN — with and without __dirname
// =======================================

// -------- Without __dirname --------
// Joins segments using correct OS separator
// No leading slash → path is RELATIVE to the CURRENT WORKING DIRECTORY (CWD)
const joinRelative = path.join('content', 'subfolder', 'test.txt');
console.log('\n[JOIN without __dirname] →', joinRelative);
// Example output: "content/subfolder/test.txt"

// -------- With __dirname --------
// __dirname = directory where THIS script file lives
// Using it makes the path ABSOLUTE to this script’s folder
const joinWithDirname = path.join(__dirname, 'content', 'subfolder', 'test.txt');
console.log('[JOIN with __dirname] →', joinWithDirname);
// Example output: "/Users/you/project/content/subfolder/test.txt" (absolute)

// =======================================
// 3️⃣ PATH.RESOLVE — with and without __dirname
// =======================================

// -------- Without __dirname --------
// resolve() ALWAYS returns an absolute path
// If first segment is relative, it starts from CWD
const resolveWithoutDirname = path.resolve('content', 'subfolder', 'test.txt');
console.log('\n[RESOLVE without __dirname] →', resolveWithoutDirname);
// Example (CWD = "/Users/you/project"):
// "/Users/you/project/content/subfolder/test.txt"

// -------- With __dirname --------
// Starts from this script’s directory → always absolute & tied to this file
const resolveWithDirname = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log('[RESOLVE with __dirname] →', resolveWithDirname);

// =======================================
// 4️⃣ VISUAL COMPARISON
// =======================================
/*
Assume:
  CWD       = /home/user/projects
  __dirname = /home/user/projects/scripts

path.join('content','file.txt')
  → "content/file.txt"   (relative)

path.join(__dirname,'content','file.txt')
  → "/home/user/projects/scripts/content/file.txt" (absolute)

path.resolve('content','file.txt')
  → "/home/user/projects/content/file.txt" (absolute, from CWD)

path.resolve(__dirname,'content','file.txt')
  → "/home/user/projects/scripts/content/file.txt" (absolute, from __dirname)
*/

// =======================================
// 5️⃣ Check file existence & read content
// =======================================

if (fs.existsSync(resolveWithDirname)) {
  console.log('\n✅ File exists at:', resolveWithDirname);

  try {
    const content = fs.readFileSync(resolveWithDirname, 'utf8');
    console.log('📄 File content:\n', content);
  } catch (err) {
    console.error('⚠️ Error reading file:', err.message);
  }
} else {
  console.log('\n❌ File not found at:', resolveWithDirname);
}
