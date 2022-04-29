const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 8081

http.createServer((req,res) => 
{
   var data = new Date().toString();
   var date = new Date().toDateString();
    fs.writeFile(`./${date}`+'.txt',data,(err)=>
    {
      if(err)
        throw err;
    })

    fs.readFile(`./${date}`+'.txt',(err,d)=>
    {
      res.writeHead(200,{'Content-Type': 'text/plain'})
      res.write(d)
      res.end()
    })
}
).listen(PORT,()=>{console.log("listening on port ",PORT)})