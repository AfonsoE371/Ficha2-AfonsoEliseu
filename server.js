const http = require('http');

const port = 3000;

const server = http.createServer((req, res) =>{
    console.log('Received request for ${req.method} ${req.url}');

    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, ()=> {
    console.log('Server running at http://localhost:${port}/');

});

