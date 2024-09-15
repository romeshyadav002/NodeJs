* -------`Server`---------

Server can be defined as a hardware who can from where i can get the result of our api request. So for these Api request theres should be a application deployed on that hardware that manages for a particular request what we need to get from the hardware.

This application sometimes called as server.

* We can use our computer as servers, we don't need AWS. But there are some limitations :- 
 1. Limited RAM
 2. Always up and running
 3. We use a local internet provider, they don't guarantee your IP. But AWS give you a fixed IP

* So whenever you are creating s HTTP sever using NodeJS
  - you are creating an application that handles users requests

`Client Server Architecture`
- there is a client with some IP
- there is a sever with some fixed IP and there is an application in it thant handles sockets
- client send request through some socket
- server application will handle that socket requests and send the data back and that socket will be closed now

`TCP/IP protocol (Transmission control protocol)`
- whenever there is a request through socket, it follows TCP/IP protocol
- protocol can be defined as some set of rules to connect two computer oe two IP's
- Examples of protocol
  1. HTTP - Hyper text Transfer Protocol
     eg:- json transfer, some text transfer etc..
  2. FTP - File Transfer Protocol
  3. SMTP - Simple mail transfer Protocol

* How the data get transferred 
 - data is transferred in small chunks called packets, Stream of chunks

* so we communicates with domain name for eg www.fb.com etc
  this domain name can be compared to home address rewari, haryana, india etc and IP can be compared to the Geo coordinates of our location

  `DNS- Domain Name server`
  whenever we hit a domain for eg:- wwww.fb.com, in this 1st we call the DNS server and this server maps with IP we want to communicate

* Can we create multiple server on same sever/computer?
  - we can create multiple http server, but to identify on which server we have to hit the request is defined by PORT -eg:- 8081, 3000
  - some port no are blocked to OS eg:- 80

* Example we hit some api request 
  IP + PORT + PATH === API
  IP + PORT === Domain Name
  facebook.com   /  api   / getProfile
  123.4.5.6      : 3000   : ------

* `socket` vs `web sockets`
 - Socket
   1. In socket, you made a connections, complete your task and close tha connections
   2. It takes less resources

  - Web sockets
    1. When a user makes a connections, it stays for a long time
    2. It takes more resources