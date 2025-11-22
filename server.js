import { log } from 'console';
import http from 'http';
//.env FILES
const PORT=process.env.PORT;
//CREATING A HTTP SERVER
const server=http.createServer((req,res)=>{
    //USING TRY CATCH SIMPLE ROUTE[WORKS ONLY IF ITS GET METHOD]
    try {
        if(req.method==='GET'){
          if(req.url==='/'){
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end("<h1>HOME PAGE</h1>")
          }else if(req.url==='/about'){
           res.writeHead(200,{"Content-Type":"text/html"})
           res.end("<h1>ABOUT</h1>")
          }else{
            res.writeHead(404,{"Content-Type":"text/plain"})
            res.end("not found")
          }
        }else{
            throw new Error("method not allowed")
        }
    } catch (error) {
        res.writeHead(500,{"Content-Type":"text/plain"})
        res.end("Server Error")
    }

    //SIMPLE  ROUTER
    // if(req.url==='/'){
    //     res.writeHead(200,{"Content-Type":"text/html"});
    //     res.end("<h1>HOME PAGE</h1>")
    // }else if(req.url==='/about'){
    //     res.writeHead(200,{"content-Type":"text/html"});
    //     res.end("<h1>ABOUT</h1>")
    // }else{
    //     res.writeHead(404,{"Content-Type":"text/plain"});
    //     res.end("File Not Found");
    // }

    //THINGS YOU DO WITH "res"
    // res.setHeader("Content-Type","text/html");
// res.write("hello world!");
// res.statusCode=404;

    //THINGS YOU DO WITH "req"
// console.log(req.url);
// console.log(req.method);
});
//PORT SETTING
server.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
    
});