describe('Working with inputs', () => {
    it('Should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        //Open the user.json file and take from them the parameters
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username, { delay: 50 })
            cy.get('#user_password').type(password, { delay: 50 })
        })
    })
})