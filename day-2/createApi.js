
const http = require("http");

http.createServer((req,res)=> {

    res.write("hii this is sharad tech house");
    res.end();

}).listen(8080);