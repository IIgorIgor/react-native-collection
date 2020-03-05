const User = require('../models/User')
const Address = require('../models/Address')


module.exports = {
    async index(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        })

        //return res.json(user)  -> retorna com as informacoes do usuario junto
        return res.json(user.addresses)  // Retorna só os endereços, sem as informaçōes do usuário
    },

    async store(req, res) {
        const { user_id } = req.params
        const { street, number, complement, neighborhood, city, country, zipcode } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User not found' })
        }

        const address = await Address.create({ user_id, street, number, complement, neighborhood, city, country, zipcode })

        return res.json(address)
    }
}