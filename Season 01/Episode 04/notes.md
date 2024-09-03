* require function is used to get the code of that file in the current file

There are two type of module pattern

1. CommonJs Modules (by default)
   (cjs)

   - module.exports()
   - require()
   - by default used in NodeJs
   - older way
   - synchronous way
   - code is run in non strict mode ( in this you can define variable as this  ===> z= 5)
   - to add this we need to add   "type": "commonjs" in package.json

2. ES Modules
   (mjs)

   - import
   - export
   - by default used in React, Angular etc...
   - newer way
   - Async way
   - code is run in strict mode ( in this you can define variable as this  ===> var z= 5)
   - to add this we need to add   "type": "module" in package.json


* Module is a piece of code (folder or file) which exists separately/independently 