const http = require('http');


const Hostname = '127.0.0.1';
const Port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('{"mensaje": "Hola Mundo!!!!"}');
});

server.listen(Port, Hostname, () => {
    console.log(`Server running at http://${Hostname}:${Port}/`);
});