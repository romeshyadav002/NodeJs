const fs = require('fs');
const https = require('https');

const a = 100;

setImmediate(() => console.log('setImmediate'));

Promise.resolve('promise').then(() => console.log('promise'));

fs.readFile('./file.txt', 'utf8', (err, data) => {
  console.log('File data ', data);
});

setTimeout(() => {
  console.log('setTimeout called after 0 seconds');
}, 0);

process.nextTick(() => console.log('process.nextTick'));

function printA() {
  console.log('a = ', a);
}

printA();

console.log('Last line of the file');

// a =  100
// Last line of the file
// process.nextTick
// promise
// setTimeout called after 0 seconds
// setImmediate
// File data  This is the file data
