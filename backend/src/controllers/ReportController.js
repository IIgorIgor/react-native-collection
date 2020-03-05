const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        const users =  await User.findAll({
            attributes: [ 'name', 'email' ],
            where: {
                email: {
                    [Op.iLike]: '%@rocketseat.com.br'   //iLike = um like no sql mas case insensitive
                }                 
            },
            // [] -> porque tem mais que uma associaçāo, dai passo as duas dentro desse colchetes
            include: [
                { 
                    association: 'addresses',
                    //attributes: [],
                    where: {
                        street: 'R. Doutor Galdino de Carvalho'
                    } 
                },
                { 
                    association: 'techs',
                    required: false,    // faz com que nāo seja necessário ter essa interaçāo para aparecer no relatório
                    attributes: [ 'name' ],
                    //through: {
                    //    attributes: [ 'user_id' ]   
                    //},
                    where: {
                        name: {
                            [Op.iLike]: 'react%'
                        }
                    } 
                },
            ]
        })

        return res.json(users)
    }
}