const express  = require("express")
const app =  express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/about", function(req, res){
    res.sendFile(__dirname + "/html/about.html")
})

app.get("/namePrint/:name/:lastName", function(req, res){
    res.send("<h1>Hello " + req.params.name + " " + req.params.lastName + ", how are you?</h1>")
})

app.listen(8080, function(){
    console.log("load")
})


var h1 = document.getElementById("horas");


