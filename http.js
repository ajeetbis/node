const http=require('http')


const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.write('welcome to knownset!')
    }
    if(req.url==='/about'){
        res.write('about to knownset!')
    }
    res.end('<h1> Ops page not found</h1>')

})

server.listen(5000)