const fs = require('fs');
const crypto = require('crypto');

// if you have changed the threadpool size to some number for example 2
// than the output will be 2 results come first than 2 and so on...
process.env.UV_THREADPOOL_SIZE = 2;

// so basically this wil offload to libuv and inside that 1 thread will be assigned to this
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
  console.log('1 - cryptoPKDF2 done');
});

// similarly for this 1 thread will be assigned
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
  console.log('2 - cryptoPKDF2 done');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
  console.log('3 - cryptoPKDF2 done');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
  console.log('4 - cryptoPKDF2 done');
});

// there is no guarantee that order of output will be 1,2,3,4 it can be any for eg:-
// 2 - cryptoPKDF2 done
// 4 - cryptoPKDF2 done
// 1 - cryptoPKDF2 done
// 3 - cryptoPKDF2 done

// whichever completes 1st will give the result

// now for eg there is 1 more crypto call
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
  console.log('5 - cryptoPKDF2 done');
});

//  so in this case 4 will give the result at same time, and for the
// 5th one we have to wait because there are only 4 threads in UVthread pool
// 5th one will take the thread when one of them is free

// so o/p can be 5th will be at last and 1st four can be random
// 2 - cryptoPKDF2 done
// 3 - cryptoPKDF2 done
// 1 - cryptoPKDF2 done
// 4 - cryptoPKDF2 done
// 5 - cryptoPKDF2 done

// OR

// 4 - cryptoPKDF2 done
// 3 - cryptoPKDF2 done
// 2 - cryptoPKDF2 done
// 1 - cryptoPKDF2 done
// 5 - cryptoPKDF2 done
