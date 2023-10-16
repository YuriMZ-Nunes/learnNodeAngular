const User = require('../models/user')

module.exports = {
    async index(req, res){ // metodo para buscar na tabela
        const users = await User.findAll()

        if(users == '' || users == null)
            return res.status(200).send({ message: "No users found"})

        return res.status(200).send({ users })
    },
    async store(req, res){ // metodo para inserir
        const {name, password, email} = req.body

        const user = await User.create(name, password, email)

        return res.status(200).send({
            status: 1,
            message: 'Registered user',
            user
        })
    },
    async update(req, res){ // metodo para atualizar

    },
    async delete(req, res){ // metodo para deletar

    },
}