var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

         var data =  {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '51992340953',
            address: {
                postalcode: '94170-244',
                street: 'Travessa Itacolomi Dois',
                number: '156',
                details: 'casa',
                district: 'Santa Cruz',
                city_state: 'Gravataí/RS'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}