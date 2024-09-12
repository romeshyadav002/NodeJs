const fs = require('fs');
const https = require('https');

const a = 100;

setImmediate(() => console.log('setImmediate'));

fs.readFile('./file.txt', 'utf8', (err, data) => {
  console.log('File data ', data);
});

setTimeout(() => {
  console.log('setTimeout called after 0 seconds');
}, 0);

function printA() {
  console.log('a = ', a);
}

printA();

console.log('Last line of the file');

// a =  100
// Last line of the file
// setTimeout called after 0 seconds
// setImmediate
// File data  This is the file data
