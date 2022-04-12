const http = require('http');
const fs = require('fs');
const PORT = 8081

http.createServer((req,res)=>{
    let date = new Date();
    // console.log(date.toISOString())
    res.writeHeader(200,{"Content-Type":'text/html'})
    fs.writeFile(`./${date.toDateString()}.txt`,date.toString(),(err)=>{
        if(err)
            console.log(err)
        else
        {
            fs.readFile(`./${date.toDateString()}.txt`,(err,d)=>{
                //console.log(d)
                res.write(d)
                res.end()
            })
        }
    })
    
}).listen(PORT,()=>{
    console.log('Server is up in ', PORT)
})