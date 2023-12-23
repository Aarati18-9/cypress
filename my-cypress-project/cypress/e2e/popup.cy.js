describe('Alerts',()=>{
  it('handle Alerts',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get(':nth-child(1) > button').click()
    //validating text present inside alert box
    cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert')

    })
    cy.get('#result').should('have.text','You successfully clicked an alert')
  })
   
  it('confirm handle Alerts',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get(':nth-child(2) > button').click()
    //validating text present inside alert box
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')

    })
    //default closed by ok button
    
    cy.on('window:confirm',()=>false);
  })
})
it('prompt handle Alerts',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome')
    })
    cy.get(':nth-child(3) > button').click()
    //validating text present inside alert box
   
  })
  it.only('authenticate handle Alerts',()=>{
    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin",password:"admin"}});
    cy.get('p').contains('Congratulations! You must have the proper credentials.')
    
   
  })

