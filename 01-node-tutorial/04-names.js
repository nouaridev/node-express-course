// local
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'

module.exports = { john, peter }// hadi bach texportihoum w tiportihoum b require 
console.log(module)// nsibou fiha l exports 

/**
     * In Node.js, the reason we use module.exports instead of the regular export 
    syntax is mainly because of the module system Node.js was originally built on.
    Here’s the breakdown:
    1️⃣ Node.js originally used CommonJS modules
    When Node.js was first created, JavaScript didn’t have a built-in
     module system (ES modules like export/import didn’t exist yet).
    So Node.js invented its own: CommonJS.
    In CommonJS:
    require() is used to import.
    module.exports is used to export.
 */