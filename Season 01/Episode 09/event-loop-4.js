const fs = require('fs');
const https = require('https');

const a = 100;

setImmediate(() => console.log('setImmediate'));

setTimeout(() => {
  console.log('setTimeout called after 0 seconds');
}, 0);

Promise.resolve('promise').then(() => console.log('promise'));

fs.readFile('./file.txt', 'utf8', (err, data) => {
  console.log('File data ', data);
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log('inner process.nextTick');
  });
  console.log('process.nextTick');
});

console.log('Last line of the file');

// Last line of the file
// process.nextTick
// inner process.nextTick
// promise
// setTimeout called after 0 seconds
// setImmediate
// File data  This is the file data
