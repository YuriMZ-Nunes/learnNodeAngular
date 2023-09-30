const Sequelize = require("sequelize")

//database conection
const sequelize = new Sequelize('formData', 'root', 'root', {
    host: "localhost",
    dialect: "mysql",
    query: {raw: true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}