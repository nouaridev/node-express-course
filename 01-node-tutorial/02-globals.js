// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
console.log(process)// will give you a big object that contains info about the env
setInterval(() => {
  console.log('hello world')
}, 1000)
console.log(module) ;
// globals homa hajat mouhimin f node 
// makach ghit houma hadou chouiya bark 
// process ta9dar tjabd biha infos 3la win rak truni lcod