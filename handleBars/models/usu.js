const db = require("./db.js")

const Usuario = db.sequelize.define('usuarios', {
    id_usu: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome_usu: {
        type: db.Sequelize.STRING,
        allowNull: false

    },
    idade_usu: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Usuario


