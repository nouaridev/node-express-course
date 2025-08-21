const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues()


/*
  📌 IMPORTANT:
  If you require this file in another file using:
      require('./07-mind-grenade')

  Node.js will:
    1. Load this file.
    2. Execute ALL the top-level code in it.
    3. That means `addValues()` will run automatically,
       even if you don't explicitly call it in the other file.

  This is because require() in CommonJS is not just "importing definitions";
  it actually EXECUTES the module the first time it is loaded.
*/