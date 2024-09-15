* According to documentation there are more phases in `event loop`
 -> timer -> pending callbacks -> idle, prepare -> poll -> check -> close callbacks -> timer ......

 ~ `timers` - this phase executes callbacks scheduled by setTimeout() and setInterval()
 ~ `pending callbacks` - executes I/O callbacks deferred to the next loop iteration
 ~ `idle, prepare` - only used internally
 ~ `poll` - retrieve new I/O events; executes all the callbacks except of close callbacks and timers callbacks and setImmediate ; node will block here when appropriate
 ~ `check` - setImmediate() callbacks are invoked here
 ~ `close callbacks` - some close callbacks eg:- socket.on('close',...)

* `Tick` - 1 cycle of the event loop is called 1 tick

-----------`Thread Pool`------
- Thread pool is present in libuv library, so basically whenever there is OS related request for example there is a request to read the file or any crypto request, than this request will go to libuv and inside libuv it will occupy(freeze) a thread in the thread pool and it will take care of that call be dealing with OS after returning the data thread will be unfreeze that thread

~ in libuv size of the thread pool is 4 be default that is called `UV Thread Pool`
- suppose there are 5 fs(file read) call at same time than 4 will occupy these threads in the pool and whenever one of them get free, 5th one will take the thread, meanwhile he have to wait.

- functions that will call Thread Pool are :- 
  1. fs
  2. dns.loopup
  3. crypto - (eg. hashing the password)
  4. user specified input

* Is NodeJS is single threaded or multi-threaded?
- so whenever the code is only synchronous, NodsJS will be single threaded,
- and whenever there is async code, it will use libuv's thread pool and than we can say it is multi threaded also

* we can change the UV thread pool size by using method
process.env.UV_THREADPOOL_SIZE = 2(number whatever you want to add)

- In libuv whenever you have to do networking(OS level calls), it will happens in sockets
each socket has socket descriptor or file descriptor

*  Thread per connection modal is not a good idea

* so in OS we have 
 1. epoll (LINUX)
 2. Kqueue (MacOS)

 - it is scalable I/O event notification mechanism (modal), this is present at kernel version
 in this basically 1 epoll descriptor can handle multiple connections
 whenever there is any activity in any connection epoll will notify libuv, and this will handle the call stack accordingly
 - epoll works in O(1) time, it uses Red Black tree Data structures

* It is called Event driven Architecture

* `Don't Block The MAIN THREAD`
 ~ Don't use these things
 - sync methods 
 - Heavy JSON objects
 - complex Regex 
 - complex calculations/loops

* Data structure is important
 - epoll uses Read black tree DS
 - timers uses min Heap DS
 
* Naming is very important

