const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const user = await User.findAll()

        return res.json(user)
    },

    async store(req, res) {
        const { id, name, email, cpf } = req.body

        let user = {}

        if (id) {
            user = await User.findByPk(id)
        } else {        
            user = await User.create({ name, email, cpf })
        }

        return res.json(user)
    },

    async getoneuser(req, res) {
        const { id } = req.params

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(400).json({ error: 'User not found' })
        }

        return res.json(user)
    }
}