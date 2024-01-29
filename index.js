const http = require("http");
const fs = require("fs");



const PORT = 2000;
const hostname = "localhost";
const Home = fs.readFileSync("./index.html");


const server = http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        return res.end(Home);
        
    }

    if(req.url ==="/about")
    {
        return res.end("<h1>ABOUT PAGE</h1>");
        
    }
    if(req.url ==="/contact")
    {
       return res.end("<h1>CONTACT PAGE</h1>");
       
    }
    if (req.url==="service")
    {
        return res.end("<h1>SERVICE PAGE</h1>");
    
    }
    else 
    {
        return res.end("<h1>PAGE NOT FOUND</h1>");
        
    }
     

}); 

server.listen(PORT,hostname,()=>
{
    console.log('server is working on http://${hostname}:${PORT})');
});