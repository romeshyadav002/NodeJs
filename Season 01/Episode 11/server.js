// Nodejs has http module, helps us to create server

const http = require('node:http');

const server = http.createServer(function (req, res) {
  if (req.url === '/getSecretData') {
    res.end('There is no secret data');
  }
  res.end('hello world');
});

server.listen(7777);

// use ExpressJS - that is NodeJS web application framework
