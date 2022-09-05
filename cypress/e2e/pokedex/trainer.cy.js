/// <reference types="cypress" />



describe('example trainer app', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:3000/')
    })
  
    it('Register Trainer', () => {

        cy.contains('Submit')
        cy.get("input").first().type("Nauter")
        cy.get("input").last().type("753")
        cy.get(".btn-login").click()
      /*
      
      cy.get('.todo-list li').should('have.length', 2)
  
    
      cy.get('.todo-list li').first().should('have.text', 'Pay electric bill eufhiwi')
      cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
      */
    })
  
  })
  