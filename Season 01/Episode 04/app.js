// this way we used in commonJs module
 require("./xyz") // one module into another 
 const {calculateSum} = require("./sum")  //  you can destructure the object or import object whole
 const {calculateMultiply} = require("./multiply") 

 const {calculateDivide, calculateSubtract} = require('./calculate')
 const data  = require('./data.json')
 
// this way we used in mjs module
// import {calculateSum} from './sum.js'

var name = "romeo"

var a = 10
var b = 20

console.log(name)
calculateSum(a,b)
calculateMultiply(a,b)

calculateDivide(b, a)
calculateSubtract(b, a)
console.log({data})

console.log(module.exports) // It is an empty object
