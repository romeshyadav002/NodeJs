// Example of IIFE:-
(function () {
  // All the code of the module is wrapped here
  var a = 1000;
  console.log(a);
})();

var a = 10;
console.log(a)

// NodeJS passes modules , requires and other things to IIFE and than V8 engine is the analyzing it
// (function (module , require) {
//   // All the code of the module is wrapped here
//   var a = 1000;
//   console.log(a);
// })();

console.log((__filename))
console.log((__dirname))