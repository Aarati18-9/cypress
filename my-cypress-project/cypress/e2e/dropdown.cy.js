describe('handle dropdown',()=>{
    it.skip('create dropdown',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#country').select('Germany').should('have.value','Germany')
    })
    it('Dynamic dropdown',()=>{
        cy.visit('https://www.google.com');
        cy.get('#APjFqb').type('hello world');
        cy.get('.wM6W7d > span').should('have.length',12)
        cy.get('.wM6W7d > span').each(($el,$index,$list)=>{
            if($el.text()=='hello world html'){
                cy.wait('$el').click();
            }
        })
    })
})