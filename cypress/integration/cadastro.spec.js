/// <reference types="cypress" />

beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app') 
});

describe('Cadastro de entregadores', () => {
    it('Usuário com cpf inválido', () => {
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome:'josé da silva',
            cpf: '00697856709',
            email:'josesilva@gmail.com',
            whatsapp:'51992340953',
            endereco:{
                cep:'94170-244',
                rua: 'Travessa Itacolomi Dois',
                numero:'156',
                complemento: 'casa',
                bairro:'Santa Cruz',
                cidade_uf:'Gravataí/RS'
            },
            modo_entrega:"Moto",
            cnh:'cnh-digital.jpg'

            
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        cy.get('input[name="address"]')
        .should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]')
        .should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]')
        .should('have.value', entregador.endereco.cidade_uf)
        //pegando pelo elemento pai e usando o contains
        cy.contains('.delivery-method li', entregador.modo_entrega).click()
        //upload, não tem nativo, usa uma biblioteca npm
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)
        // submeter e validar
        cy.get('form button[type="submit"]').click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
       });
       it.only('Usuário deve se tornar um entregador', () => {
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome:'josé da silva',
            cpf: '006978567',
            email:'josesilva@gmail.com',
            whatsapp:'51992340953',
            endereco:{
                cep:'94170-244',
                rua: 'Travessa Itacolomi Dois',
                numero:'156',
                complemento: 'casa',
                bairro:'Santa Cruz',
                cidade_uf:'Gravataí/RS'
            },
            modo_entrega:"Moto",
            cnh:'cnh-digital.jpg'

            
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        cy.get('input[name="address"]')
        .should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]')
        .should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]')
        .should('have.value', entregador.endereco.cidade_uf)
        //pegando pelo elemento pai e usando o contains
        cy.contains('.delivery-method li', entregador.modo_entrega).click()
        //upload, não tem nativo, usa uma biblioteca npm
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)
        // submeter e validar
        cy.get('form button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
       });
})
