// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names') // tjiblak l exports ta3 haadak lmodule 
// const {jhon , peter} = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


// ki tkoun takhdam machi lazem tdir koulech fi file wa7ed
// no ta9dar tdir ch7al men wa7ad w t3ayatlhoum fi asasi wnsmouhoum modules

//modules ysa3douna nektbou smaller code in seperated files in more structured way