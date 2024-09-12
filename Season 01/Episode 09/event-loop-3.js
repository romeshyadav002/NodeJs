const fs = require('fs');
const https = require('https');

const a = 100;

setImmediate(() => console.log('setImmediate'));

setTimeout(() => {
  console.log('setTimeout called after 0 seconds');
}, 0);

Promise.resolve('promise').then(() => console.log('promise'));

fs.readFile('./file.txt', 'utf8', (err, data) => {
  setTimeout(() => {
    console.log('2nd setTimeout called after 0 seconds');
  }, 0);

  process.nextTick(() => console.log('2nd process.nextTick'));

  setImmediate(() => console.log('2nd setImmediate'));

  console.log('File data ', data);
});

process.nextTick(() => console.log('process.nextTick'));

console.log('Last line of the file');

// Last line of the file
// process.nextTick
// promise
// setTimeout called after 0 seconds
// setImmediate
// File data  This is the file data
// 2nd process.nextTick
// 2nd setImmediate
// 2nd setTimeout called after 0 seconds
