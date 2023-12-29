const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain"});
    res.end("hello new code");
});
const PORT = process.env.PORT || 3001;
server.listen(PORT,()=> console.log("server"));