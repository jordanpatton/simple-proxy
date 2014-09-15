// Dependencies
var http    = require('http');
var request = require('request');
// Configuration
var config = {
  port:   process.env.PORT   || process.env.port   || '3000',
  target: process.env.TARGET || process.env.target || 'https://dl.dropboxusercontent.com/u/{USER_ID}/{PUBLIC_FOLDER}'
};


// HTTP Server
http.createServer(function (req, res) {
  
  // Sanitize request
  if(req.url==='' || req.url==='/') {req.url = '/index.html';}
  
  // Log activity
  console.log('serving: '+req.url);
  
  // Proxy traffic to target
  req
    .pipe(request(config.target+req.url), {end: true})
    .pipe(res, {end: true});
  
}).listen(config.port);

console.log('simple-proxy listening on port '+config.port);
