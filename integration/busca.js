/// <reference types="Cypress" />

describe('Fazer Login na Loja',()=>{

    it('Cenario Positivo: Login Sucesso',()=>{
        cy.login_loja()
        cy.contains('Frete Grátis').should ('exist')
      
    
    })

    it('Cenário de Busca',()=>{
        cy.login_loja()
        cy.busca()
        cy.contains('Produto lote OMA 55').should ('exist')

      })

})
