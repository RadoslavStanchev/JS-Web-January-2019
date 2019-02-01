const http = require('http');
const url = require('url');
const handlers = require('./handlers/index');
const port = 3000;


http.createServer((req, res) => {
    // res.write('It works!');
    // res.end(); just to test if the server works at the beginning 
    req.path = url.parse(req.url).pathname;

    // for (const handler of handlers) {
    //     if (handler(req, res) === false) {
    //         break;
    //     }
    // }

    handlers.forEach(handler => {
        if(!handler(req, res)) {
            return
        }
    })
    
}).listen(port);

