
const express = require('express') //require in the express package
const app = express() //store express in a variable.
app.use(express.static('public')) //used to include a the front end css js img etc. in a folder named public.
app.use(express.urlencoded({extended:false})) // this line and the line below allows the ability to add user submitted data to the request object so it can be accessed from req.body
app.use(express.json())
const path = require('path') //used to set up the index.html file path.
const sharp = require('sharp') //require in the sharp package.

sharp('./server-images/workspace.jpg').resize({ height:660, width:1100}).toFile('./public/images/workspace1100x660.jpg')
sharp('./server-images/workspace.jpg').resize({ height:330, width:550}).toFile('./public/images/workspace550x330.jpg')
sharp('./server-images/workspace.jpg').resize({ height:165, width:225}).toFile('./public/images/workspace225x165.jpg')


app.use('/', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
    //__dirname : It will resolve to your project folder.
})

app.listen(3000)


