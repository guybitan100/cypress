describe('Working with inputs', () => {
	it('Should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
	})
	it('Should fill username', () => {
		cy.get('#user_login').clear()
		cy.get('#user_login').type('Some Invalid Name', { delay: 50 })
	})
	it('Should fill password', () => {
		cy.get('#user_password').clear()
		cy.get('#user_password').type('Some Invalid password', { delay: 50 })
	})
	it('Should submit login form', () => {
		cy.contains('Sign in').click()
		cy.wait(5000)
	})
	it('Should display error message', () => {
		cy.get('.alert-error').should('be.visible')
	})
})
