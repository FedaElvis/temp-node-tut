//Modules
// Modules - Encaspulated code only share minimum
const names = require('./4-names');
console.log(names)

const utils = require('./5-utils')

require('./6-alternative-flavor')
// console.log(data)

sayHi('susana')
sayHi(names.john)
sayHi(names.peter)

const last = require('./7-mind-grenade')
console.log(last)