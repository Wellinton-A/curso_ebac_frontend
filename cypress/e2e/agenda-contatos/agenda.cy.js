/// <reference types="cypress" />

describe('Teste em agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Teste adicionar de novo contato', () => {
        cy.get('input[type="text"]').type('Joao das Neves')
        cy.get('input[type="email"]').type('joao@example.com')
        cy.get('input[type="tel"]').type('(00) 00000-0000')
        cy.get('button[type="submit"]').click()
        cy.get('.contato').should('have.length', 4)
    })
    it('Teste de alteracao de contato', () => {
        const botoes = cy.get('.edit')
        botoes.last().click()
        cy.get('input[type="text"]').type('{selectAll}{backspace}').type('Joao da Silva Almeida')
        cy.get('button[type="submit"]').click()
        cy.get('.contato').last().then( lastElement => 
            cy.wrap(lastElement).find('li').first().should('have.text', 'Joao da Silva Almeida'))
    })
    it('teste de exclusao de contato', () => {
        const botoesDelete = cy.get('.delete')
        botoesDelete.last().click()
        cy.get('.contato').should('have.length', 3)
    })
})