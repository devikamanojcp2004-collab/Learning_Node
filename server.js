import { log } from 'console';
import http from 'http';//import http module
const PORT=process.env.PORT;//.env FILES
import fs from 'fs/promise';//imported fs module for file write ,read etc
import url from 'url';
import path from 'path';// imported path module for using file paths

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//CREATING A HTTP SERVER
const server=http.createServer(async(req,res)=>{
  let filePath;
    //USING TRY CATCH SIMPLE ROUTE[WORKS ONLY IF ITS GET METHOD]
    try {
        if(req.method==='GET'){
          if(req.url==='/'){
            filePath=path.join(__dirname,'public','index.html')//THIS LINE IS USED WHILE USING PATH AND URL MODIULE
            // res.writeHead(200,{"Content-Type":"text/html"})//SIMPLE ROUTER METHOD
            // res.end("<h1>HOME PAGE</h1>")//SIMPLE ROUTER METHOD
          }else if(req.url==='/about'){
            filePath=path.join(__dirname,'public','about.html')//THIS LINE IS USED WHILE USING PATH AND URL MODIULE
          //  res.writeHead(200,{"Content-Type":"text/html"})//SIMPLE ROUTER METHOD
          //  res.end("<h1>ABOUT</h1>")//SIMPLE ROUTER METHOD
          }else{
            throw new Error("file not found")
            // res.writeHead(404,{"Content-Type":"text/plain"})//SIMPLE ROUTER METHOD
            // res.end("not found")//SIMPLE ROUTER METHOD
          }
          const data= await fs.readFile(filepath);
          res.setHeader('Content-Type','text/html');
          res.write(data);
          res.end();
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