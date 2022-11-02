const path = require('path')
const fs = require('fs')
const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url === '/index.html'){
        let filepath = path.join(__dirname, 'portfolio', 'index.html')
        fs.readFile(filepath, 'utf8', (err, data)=> {
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(data)
        })
    }
    if(req.url === '/about.html'){
        let filepath = path.join(__dirname, 'portfolio', 'about.html')
        fs.readFile(filepath, 'utf8', (err, data)=> {
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(data)
        })
    }
    if(req.url === '/contact.html'){
        let filepath = path.join(__dirname, 'portfolio', 'contact.html')
        fs.readFile(filepath, 'utf8', (err, data)=> {
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(data)
        })
    }
})

const port = 4040;

server.listen(port, '127.0.0.1', ()=> {
    console.log(`Server is running on port ${port}`)
})