console.log('Hello world')

var a = 182892
var b = 93937

// this callback will only be pushed to call stack in V8 once the call stack is empty
setTimeout(() => {
    console.log('call me ASAP')
}, 0);

setTimeout(() => {
    console.log('call me aster 3 seconds')
}, 3000);

function multiplyFn(x, y){
    const result = x* y
    return result
}

var c = multiplyFn(a, b)

console.log('result is ', c)