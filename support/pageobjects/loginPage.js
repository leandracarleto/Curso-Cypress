/// <reference types="cypress" />

import LoginElements from '../elements/loginElements'
const loginelements = new LoginElements
class LoginPage {
    logarads(){
        cy.visit ("https://afa-staging.percycle.com");

        }
    digitarLoginSenha(){
        cy.get (loginelements.email()).type("leandra.carleto@linx3.com")
        cy.get(loginelements.senha()).type("Linx@123")
             
    }
    clicarLogar(){
        cy.get(loginelements.botao()).click()

        cy.wait(10000)

    
    }

    
}

export default LoginPage