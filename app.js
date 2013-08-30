/**
 * Created with JetBrains WebStorm.
 * User: Hstar
 * Date: 12-11-18
 * Time: 下午10:46
 * To change this template use File | Settings | File Templates.
 */
var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\nThis is my first NodeJs');
}).listen(2222,'127.0.0.1');
console.log("Serverrrrrrrrrrrrrr running at http:127.0.0.1:2222");