const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app use to use static folder
// __dirname is variable in js
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// create middleware for any name
// const JayminMiddleware = (req,res,next)=>{
//   console.log(req)
// }
//app.use(JayminMiddleware)


app.get('/hello/:name', (req, res) => {
    //res.send('About')                                   // send request the page on server
    //res.sendFile(path.join(__dirname, 'index.html'))     // it can access other html file 
    //res.json({"jaymin":18})                                // it can json file send the server in key:value form
    res.send('Hello World '+req.params.name)              // print parameter in the output
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})