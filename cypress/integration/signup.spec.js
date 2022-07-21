/// <reference types="cypress" />
import signupPage from '../../pages/signupPage'
import signup from '../../pages/signupPage'
import signupFactory from '../factories/SignupFactory'


describe('Signup', () => {

    it('User should be deliver', function () {
        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('User with invalid document', function () {
        var deliver = signupFactory.deliver()

        deliver.cpf = '000234654'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    });
    it('User with invalid email', function () {
        var deliver = signupFactory.deliver()

        deliver.email = 'marcos.gmail.com'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    });

    context('required fields', function () {

        const messages = [{
                field: 'name',
                output: 'É necessário informar o nome'
            },
            {
                field: 'cpf',
                output: 'É necessário informar o CPF'
            },
            {
                field: 'email',
                output: 'É necessário informar o email'
            },
            {
                field: 'postalcode',
                output: 'É necessário informar o CEP'
            },
            {
                field: 'address-number',
                output: 'É necessário informar o número do endereço'
            },
            {
                field: 'delivery_method',
                output: 'Selecione o método de entrega'
            },
            {
                field: 'cnh',
                output: 'Adicione uma foto da sua CNH'
            }
        ]

        before(function(){
            signup.go()
            signup.submit()
        });

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function() {
                signupPage.alertMessageShouldBe(msg.output)
            });
        }) 
            
    })
    
    it('required fields', function () {
        signup.go()
        signup.submit()
    });
})
