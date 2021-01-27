/// <reference types  = "Cypress" />

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Given(/^que é aberta a página inicial$/, () => {
	loginPage.logarads()

});

When(/^é digitado o usuário e senha$/, () => {
	loginPage.digitarLoginSenha()
});

When(/^clica no botão Entrar$/, () => {
	loginPage.clicarLogar()
});

Then(/^o login é Feito com Sucesso$/, () => {
	cy.contains("Dashboard").should('exist')

});


