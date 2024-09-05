* NodeJs has an event-driven architecture capable of asynchronous I/O

* JS -> synchronous single threaded language

* How synchronous code is executed?
 - Js engine has 1 call stack, memory heap (where all the variables, functions are alloted memories) , Garbage collector
 - Garbage collector removed the unused variables, functions or clear the memories
 - whole code is added GEC(global execution context) and added to call stack
 - whenever the function is called , its execution context is created and added to call stack
 - then it will remove all the elements from stack one by one

* How Asynchronous code is executed?
 - so in asynchronous code, there will be scenarios where we need to call the api's, 
   connection request to DB, timer, files etc
 - All of these are in OS(operating system)
 - In NodeJs this superpower to connect with OS is given by `libuv` library

* libuv
 - It is a multi-platform C library that provides support for asynchronous I/O based on event loops
 - asynchronous made simple

* NodeJs is asynchronous but the V8 engine is synchronous
 - NodeJs can do async I/O
 - it is non blocking I/O using v8 engine
 - it is not blocking the main thread
