const Sequelize = require('sequelize')
const db_config = require('../config/database')

const user = require('../models/user')

const connection = new Sequelize(db_config)

try {
    connection.authenticate()
    console.log('Connection has been established successfully')
}catch(error){
    console.log('Unable to connect to the database: ', error)
}

user.init(connection)


module.exports = connection