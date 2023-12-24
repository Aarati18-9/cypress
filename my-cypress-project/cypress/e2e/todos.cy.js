describe ('todo',()=>{
    beforeEach(()=>{
        cy.visit('https://todolist.james.am/#/');
        cy.get('.new-todo').type('Eat {enter}')
        cy.get('.new-todo').type('Dance {enter}')
        cy.get('.new-todo').type('Walking {enter}')
        cy.get('.new-todo').type('Singing {enter}')
        cy.get('.new-todo').type('Sleep {enter}')
    })
    it('item create',()=>{
        cy.get('.new-todo').type('Drawing {enter}')
        cy.get('.todo-list').find('li').should('have.length',6)
        cy.get('.todo-list').contains("Drawing").should('exist')
    })
    it('check todo',()=>{
        cy.get(':nth-child(1) > .view > .toggle').check().should('be.checked')
        cy.get('.todo-list>li:nth-child(1)').should('have.class','completed')

    })
    it('delete todo',()=>{
        cy.get(':nth-child(1) > .view > .destroy').click({ force: true });
        cy.get('.todo-list').contains("Eat").should('not.exist');
        
    })
    it('for active',()=>{
        cy.get('.todo-list li:not(.completed)').should('have.length', 5);

    })
    it('for completed',()=>{
        cy.get(':nth-child(1) > .view > .toggle').check().should('be.checked')
        cy.get('.todo-list li.completed').should('have.length', 1);
    })
})