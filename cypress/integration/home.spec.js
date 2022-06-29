/// <reference types="cypress" />

beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app') 
});

describe('home page', () => {

    it.only('app deve estar online', () => {
       
       cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    });

    it('deve poder realizar um cadastro na plataforma', () => {
        cy.get('a').click()
        cy.get('h1').should('be.visible')
    });
    
});