/// <reference types  = "Cypress" />

import deslogarPage from '../pageobjects/deslogarPage'
const deslogarpage = new deslogarPage

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Given(/^que estou logada$/, () => {
	loginPage.logarads()
	loginPage.digitarLoginSenha()
	loginPage.clicarLogar()
	
});

When(/^clico no botão de perfil$/, () => {
	deslogarpage.deslogar()

});

When(/^clica no botão sair$/, () => {
	deslogarpage.deslogarSair()
});

Then(/^sou redirecionada para tela de login$/, () => {
	cy.contains("Login").should('exist')

});







	




