describe('Browser Actions', () => {
    it('First test', () => {
        //By Tag Name
        cy.get('input')
        //By ID
        cy.get('#input')
        //By Class Name
        cy.get('.input')
        //By Attribute Name
        cy.get('[input]')
        //By Attribute Name And Value
        cy.get('[input="Email"]')
        //By Class Value
        cy.get('[class="input-full-width"]')
        //By Tag name and Attribute with Value
        cy.get('input[placeholder="Email"]')
        //By two different attributes
        cy.get('input[placeholder="Email"][type=email]')
        //By tag name, Attribute with value, ID and classname
        cy.get('input[placeholder="Email"]#inputEmail.input-full-width')
        //By Text Value inside
        cy.contains('sign in')
    })
})
