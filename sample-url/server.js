const http = require('http');
const generateResponse = require('../sample-module/response');
const contentType = require('../sample-module/contentType');
const fs = require('fs');
const readHtml = require("./readHtml");
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const urlParsed = url.parse(req.url);
    let html ;
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType());
    if(urlParsed.pathname === '/about') {
        html = readHtml('./about.html')
    } else {
        html = readHtml('./mainpage.html')
    }
    res.end(html);
    // console.log(generateResponse());
});

server.listen(port, hostname, () => {
    console.log(`Server started on port ${port}`);
})