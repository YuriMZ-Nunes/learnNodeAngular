var http = require("http")

http.createServer(function(req, res){
    res.end("mensagem")
}).listen(8080)

console.log("The server is load");

