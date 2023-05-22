describe('automatisation scénario de test reussie',()=>{
    it('formulaire inscription',()=>{
        cy.visit('https://preprod.backmarket.fr/register');
        cy.get('#firstName').type('diMariam');
        cy.get('#lastName').type('Diallo');
        cy.get('#signup-email').type('mari@gmail.com');
        cy.get('#signup-password').type('M12345678');
        cy.get('[data-qa="signup-submit-button"]').click();
        cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click();

    });
           });
           
describe('automatisation scénario de test echouée',()=>{
     it('formulaire echoué',()=>{
                cy.visit('https://preprod.backmarket.fr/register');
                cy.get('#firstName').type('diMariam');
                cy.get('#lastName').type('Diallo');
                cy.get('#signup-email').type('mari@gmail.com');
                cy.get('#signup-password').type();
                cy.get('[data-qa="signup-submit-button"]').click();
                cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click();
        
            });
                   });
describe('automatisation scénario de test reussie',()=>{
    it('authentification',()=>{
        cy.visit('https://preprod.backmarket.fr/register');
        cy.get('#signup-email').type('mari@gmail.com');
        cy.get('#signup-password').type('M12345678');
        cy.get('[data-qa="signup-submit-button"]').click();
        cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click();
                       
         });
            });
   
        

