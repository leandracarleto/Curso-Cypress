/// <reference types="Cypress" />

describe('Fazer Login na Loja',()=>{

    it('Cenario Positivo: Login Sucesso',()=>{
        cy.login_loja()
        cy.contains('Frete Grátis').should ('exist')
        
        
    })

    it('Cenario Negativo: Login Falhou',()=>{
        
    })

})
