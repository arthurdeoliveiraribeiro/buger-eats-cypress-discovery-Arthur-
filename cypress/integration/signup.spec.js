import signup from '../pages/SignupPage';
import signupFactory from "../factories/SignupFactory"

describe('Signup', () => {

    //Buscando uma massa de teste para executar 
    /*
    beforeEach(function () {
        //then, retornou a massa inteira de deliver
        //fixture apenas procurou 
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })
   */
    //Usuário deve se tornar um entregador
    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)
    })
    //'CPF incorreto
    it('Incorrent document', function () {
        var deliver = signupFactory.deliver()
        deliver.cpf = '0885875451'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrent email', function () {
        //passando de json para um elemento na classe 
        var deliver = signupFactory.deliver()
        deliver.email = "arthur.com"
        //entrar no site
        signup.go()
        //passando os dados do formulario
        signup.fillForm(deliver)
        //clicando no botão
        signup.submit()
        //verificando a mensagem 
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o e-mail' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]
        //Função depois de alguma coisa
        before(function(){
            signup.go()
            signup.submit()
        })
        //para percorrer a lista
        messages.forEach(function(msg){
            //Criando um caso de teste para cada campo 
            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })


})

