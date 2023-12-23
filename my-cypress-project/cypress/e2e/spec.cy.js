describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://testautomationpractice.blogspot.com/');
  })
  it('radio_button', () => {
    cy.get('#male').check().should('be.checked')
    cy.get('#female').should('not.be.checked')
  })
  it('check-box',()=>{
    cy.get('#sunday').should('be.visible')
    cy.get('#sunday').check().should('be.checked')
    cy.get('#sunday').uncheck().should('not.be.checked')
    //selecting all the checkboxes
    //cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
    cy.get('input.form-check-input[type="checkbox"]').first().check()
  })
})