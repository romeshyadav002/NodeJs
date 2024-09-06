const crypto = require("crypto");

console.log("Hello world");

var a = 182892;
var b = 93937;

//  Password Base Key Derivative Function
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is generated")

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("key is generated");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log("result is ", c);


// op will be
// Hello world
// First key is generated
// result is  17180325804
// key is generated