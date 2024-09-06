const fs = require('fs')
const https = require('https')

console.log('Hello world')

var a = 182892
var b = 93937

// Synchronous function ( this will block the main thread)
// fs.readFileSync('./file.txt', 'utf8')
// console.log('This will execute ony after file read')

https.get('https://dummyjson.com/products/1', (res) => {
    console.log('fetched data successfully')
})

setTimeout(() => {
    console.log(' setTimeout called after 5 seconds')
}, 5000);


// Asynchronous function ( this will not block the main thread)
fs.readFile('./file.txt', 'utf8', (err, data) =>{
    console.log('File data ', data)
})

function multiplyFn(x, y){
    const result = x* y
    return result
}

var c = multiplyFn(a, b)

console.log('result is ', c)


// output will be
// Hello world
// result is  17180325804
// File data  This is the file data
// fetched data successfully
//  setTimeout called after 5 seconds