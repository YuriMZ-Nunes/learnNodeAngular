const Sequelize = require("sequelize")
const sequelize = new Sequelize('nodeAulas', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Connected")
}).catch(function(erro){
    console.log("Connection error: "+erro)
})

const Postagem = sequelize.define('postagens', {
    id_post: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo_post: {
        type: Sequelize.STRING,

    },
    conteudo_post: {
        type: Sequelize.TEXT,
        
    }
})

Postagem.create({
    titulo_post: "Primeiro post",
    conteudo_post: "Este aqui eh a primeira postagem feita direto no javacript"
})

Postagem.sync()

const Usuario = sequelize.define('usuarios', {
    id_usu: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome_usu: {
        type: Sequelize.STRING,
        allowNull: false

    },
    idade_usu: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


Usuario.create({
    nome_usu: "Yuri Nunes",
    idade_usu: 22
})
Usuario.create({
    nome_usu: "Miguel Medina",
    idade_usu: 20
})
Usuario.create({
    nome_usu: "Kevin Fernandes",
    idade_usu: 19
})
Usuario.create({
    nome_usu: "Que parapo",
    idade_usu: 19
})

Usuario.sync()