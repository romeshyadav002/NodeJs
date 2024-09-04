* Whenever you create a module, NodeJs wraps it in a function and than we export that and require it another module
 - So basically when we used require statement NodeJs wrap the whole module into a function and than we can use it
 - This function is called IIFE - Immediately invoked function expression


 Example of IIFE:- 
 (function(){
 
 })()


* IIFE
 - Immediately invokes the code
 - maintain privacy -( Keep var and function safe)

* How are variables and function private in different module??
 - because of IIFE and require statement
 - it is wrapping the code

* How do you get access to module.exports?
 - with the help of NOdeJs, these are passes as params to IIFE function

* Mecahnism of require
 1. Resolving the module 
   - ./localpath
   - .json
   - node:module
 2. Loading the module
   - file content is loaded according to the file type
 3. compile the code - wraps inside the IIFE
 4. Evaluation
   - module.exports happens here
 5. caching
   - for eg:- if the particular module is required by several modules than the Nodejs cached that module