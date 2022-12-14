var faker = require('faker')
var cpf = require('gerador-validador-cpf')
// biblioteca de dados falsos


export default {
    
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var email = faker.internet.email(firstName)
        
        

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: `${email}`,
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: 1000,
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
    return data
    }
    
}