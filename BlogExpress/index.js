const express = require('express');
const path = require('path')
const app = express()
const port = 3000

const { engine } = require('express-handlebars');
 
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, "static")))     // use for static folder

app.use('/',require(path.join(__dirname, 'routes/blog.js')))    // use another js file

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})