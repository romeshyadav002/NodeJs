var a = 10000 // this will execute by call stack GEC(global execution context) memory will be allocated into heap
var b = 202002 // this will execute by GEC(global execution context) memory will be allocated into heap

https.get("https://api.fbi.com", // v8 engine will send this to `libuv` to handle this 
    (res) => {
        console.log(res?.secret)
    }
)

setTimeout(() => {     // v8 engine will send this to `libuv` to handle this 
    console.log('setTimeout')
}, 5000);

FileSystem.readFile('./gossip.txt', 'utf8',    // v8 engine will send this to `libuv` to handle this 
    (data) =>{
        console.log('File Data ', data)
    }
)

function multiplyFn(x, y){    // memory will be allocated to heap handled by GEC
    const result = x * y
    return result
}

var c = multiplyFn(a, b)  // now function execution context will be created in the call stack

console.log(c)   // print it into the console



// so basically libuv will send the data and the callback function which ever is finished first and than 
//  send it to call stack and, call stack will execute it and pop it out accordingly
// garbage collector will work in sync with memory heap