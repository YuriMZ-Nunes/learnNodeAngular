const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Usuario = require('./models/usu')

// config
    // template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//config body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/cad', function(req, res){
    res.render('usuarioForm')
})

app.post('/usuarioCadastrado', function(req, res){
    Usuario.create({
        nome_usu: req.body.nome,
        idade_usu: req.body.idade
    }).then(function(){
        return res.redirect('/')
    }).catch(function(erro){
        res.send("Erro: "+ erro)   
    })
})

app.get('/', function(req, res){
    Usuario.findAll().then(function(usuarios){
        res.render('home', {usuarios: usuarios})
    })
})

app.get('/deleteUsuario/:id', function(req, res){
    Usuario.destroy({where: {'id_usu': req.params.id}}).then(function(){
        return res.redirect('/')
    }).catch(function(erro){
        res.send("Erro: "+erro)
    })
})



app.listen(8080, function(){
    console.log("localhost:8080 ok")
})

