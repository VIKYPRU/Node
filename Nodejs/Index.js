// require ('./Add')


// const plus=require('./Add')
// plus(2,5)
// plus(5,5)
// plus(4,5)
// require('./person1')
// require('./person2')
// require('./iife')
//with caching the output og first class

// const Building1=require('./Building')
// console.log(Building1.getName())
// Building1.setName('villa')
// console.log(Building1.getName())

// const Building2=require('./Building')
// console.log(Building2.getName())

//without caching
// const Building=require('./Building')
// const Building1=new Building('house')
// console.log(Building1.getName())

// Building1.setName("villa")
// console.log(Building1.getName())

// const Building2=new Building(Building1.getName())
// console.log(Building2.getName())

// console.log("hello world from indexjs")

// const add=require('./Math')//1.
// add(2,4)


//3
// const Math=require('./Math')
// Math.plus(2,8)
// Math.sub(6,5)


//4 and 5
// const{add,sub,div}=require('./Math')
// add(2,6)
// sub(5,5)
// div(5,8)


//writting the file for create and update

// const fs=require('node:fs')
//  fs.writeFileSync('./data.txt','hello world')
//  fs.writeFile('./data.txt','hi world',{flag:"a"},(err)=>{
//     if(err){
//         console.log(err);
//     }
//         else{
//             console.log("file writen successfully")
//         }
        
//     }
//  )

 //to delete

//  const fs=require('node:fs')
//  fs.unlink('./data.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("deleted successfully")
//     }
//  })

 //to transfer the file

//  const fs=require('node:fs')
//  const readableStream=fs.createReadStream('./file1.txt',{
//     encoding:'utf-8',
//     highWaterMark:2 //=>to output show the 2 world

//  })
//  const writeableStream=fs.createWriteStream('./file2.txt')
//  readableStream.on("data",(chunk)=>{
//     console.log(chunk)
//     writeableStream.write(chunk)
//  })

 //to transfer file using pipes

//  const fs=require('node:fs')
//  const zlib=require('zlib')
//  const zip=zlib.createGzip()
//  const readableStream=fs.createReadStream('./file1.txt',{
//     encoding:'utf-8',
//     highWaterMark:3
// })
// readableStream.pipe(zip).pipe(fs.WriteStream('./file3.txt.zip'))

//creating http server

// const http=require('node:http')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{        //200 is keyword no for success
//         "content-type":"text./plan"
//     })
//     res.end("hello world")
// })
// server.listen(3001,()=>{
//     console.log('server is running on port 3001')
// })

//json link with content

// const http=require('node:http')
// const json={
//     "name":"adam",
//     "age":25, 
//     "addre":"abc"
// }
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "content-type":"application/json"
//     })
//     res.end(JSON.stringify(json))
// })
// server.listen(3002,()=>{
//     console.log(json)
// })

//html in json

const http=require('node:http')
const fs=require('node:fs')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/html"
    })
    fs.createReadStream('./index.html').pipe(res)
})
server.listen(3002,()=>{
    console.log("server is running on port 3002")
})

//routing in server

// const http=require('node:http')
// const server=http.createServer((req,res)=>{


//     if(req.url === '/'){
//         res.writeHead(200,{
//             "content-type":"text/plain"
//         })
//         res.end("Homepage")
//     }
//     else if(req.url === '/about'){
//         res.writeHead(200,{
//             "content-type":"text/plain"
//         })
//         res.end("about page")
//     }
//     else if(req.url === '/api'){
//         res.writeHead(200,{
//             "content":"text/json"
//         })
//         res.end(JSON.stringify({
//             "name":"adam",
//             "age":10,
        
//         }))
//     }
//     else{
//         res.writeHead(404)
//         res.end("page not found")
//     }
// })
// server.listen(3000,()=>{
//     console.log("server is running on  port 3000")
// })