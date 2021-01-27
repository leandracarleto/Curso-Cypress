/// <reference types="cypress" />

import deslogarElements from '../elements/deslogarElements'
const deslogarelements = new deslogarElements
class deslogarPage   {
    logarads(){
        cy.visit ("https://afa-staging.percycle.com");

        }
    
    deslogar()
    {

        cy.get(deslogarelements.botaoPerfil()).click()

    }

    deslogarSair()
    {
        cy.get(deslogarelements.sair()).click()
    }

    
}

export default deslogarPage