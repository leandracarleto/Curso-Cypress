/// <reference types="Cypress" />

Cypress.Commands.add('login_loja',()=>{
    cy.visit('/login')
    cy.get('.painel-wrapper > .wd-profile-login.wd-widget > .js-login > :nth-child(1) > #widget75-email').type('atendimento@ezcommerce.com.br')
    cy.get('.painel-wrapper > .wd-profile-login.wd-widget > .js-login > :nth-child(2) > #widget75-password').type('123')
    cy.get('.painel-wrapper > .wd-profile-login.wd-widget > .js-login > :nth-child(2) > #widget75-submit').click()
    cy.visit('https://brandshub.core-hlg.dcg.com.br/produto-lote-oma-54-produto-lote-oma-54-p502')
    cy.get('.btn').click()
    

})

Cypress.Commands.add('busca',()=>{
    cy.get('form > .input-wrapper > .clear-default-value').type ('Produto lote OMA 55')
    cy.get('.wd-search > form > button').click ()
    

})


