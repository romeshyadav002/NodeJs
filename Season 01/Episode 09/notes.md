* `lib.uv` 
(Asynchronous code are offloaded to libuv)
(Asynchronous I/O (Non blocking I/O ) is possible because of libuv )

 Three major components of libuv are:-
 1. Event loop
 2. Callback Queue
 3. Thread Pool


 * Callback queue
 suppose Js engine is busy in doing some synchronous code, and some asynchronous code gets the output meanwhile for eg:- any API call gets the result, than it will get added to the call back queue, after completion of all task in call stack in V8 engine these items in callback queue will be pushed to call stack one by one

 * Event loop functionality
   This will keep check of the call stack and callback queue, whenever there is something in the callback queue and call stack is empty, it will push the code from callback queue to V8 call stack.
   
   suppose many async code is executed and it is present in callback queue, than event loop prioritize which code to push to call stack first.

   There are majorly 4 phases in the event loop
   1. `timer`:- all the setTimeout and setInterval code will be executed first
   2. `poll`:- callbacks, incoming requests, data, fs,crypto, http.get etc. these will be executed in this phase
   3. `check`:- setImmediate code will be executed in this phase
   4. `close`:- all the close or cleanup operations like closing the socket will be be executed in this phase

   These phases will run in the cycle
   timer -> poll -> check -> close -> timer ...

    Before any above phase event also run one more cycle called inside cycle
    ~ process.next Tick() -> promise callbacks -> process.next Tick() ...

    
* Note:- 
  ~ file reading takes time
  ~ event loop waits at poll phase
  ~ nextTick callback queue has the highest priority
    If there is any other nextTick nested into one nextTick than it will execute other than any other ting
