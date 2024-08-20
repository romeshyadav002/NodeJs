// this way we used in commonJs module
// require("./xyz") // one module into another 
// const {calculateSum} = require("./sum")  //  you can destructure the object or import object whole

// this way we used in mjs module
import {calculateSum} from './sum.js'

var name = "romeo"

var a = 10
var b = 20

console.log(name)
calculateSum(a,b)

console.log(globalThis === global)
