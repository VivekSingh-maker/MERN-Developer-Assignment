// 1.Node.js: Write a basic Node.js server that listens on port 3000 and 
// returns a "Hello, World!" message when the root URL is accessed.
//MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\1.Node.js\server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end("Hello, World!\n");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found\n");
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});