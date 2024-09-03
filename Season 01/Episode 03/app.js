var name = "romeo"

var a = 10
var b = 20

console.log(name)
console.log(a+b)


// global object in node js , It is not a part of V8 Engine
console.log(global)

// window is defined in browsers not in node js
// console.log(window)

// this will give an empty object where else in browser it will give window object
console.log(this)

// to overcome this naming and referencing to global object which is different in browsers and nodejs,
// community give a different key word that works everywhere that is :- globalThis
console.log(globalThis)

console.log(globalThis === global)
