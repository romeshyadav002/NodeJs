* JS main thread will not be blocked 
 - It will offloads to `libuv` when there is a delay in the task and finish other task 
   meanwhile 

* Synchronous method will block the main thread - Try not to use this