var http = require("http")
var htmlfile = require("fs")
http.createServer(function(req, res){
    htmlfile.readFile(__dirname + '/index.html',function(err,data){
        res.writeHead(200,{
            'content-type':'text/html'
        })
        res.write(data)
    })
}).listen(5050,()=>console.log("Server Running!"))
