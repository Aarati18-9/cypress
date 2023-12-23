describe('iframe',()=>{
 it('handling',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe');
    var iframe=cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap);
    iframe.clear().type("what the hell")
    
 })
})