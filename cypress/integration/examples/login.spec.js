describe('Working with inputs', () => {
	it('should override the localtime', () => {
		//Time & Date Modification
		const date = new Date(2022, 1 / 1).getDate() //return a timestamps
		cy.clock(date)
	})
	it('Should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		//Clear Cookies & Local Storage
		cy.clearCookie('your item', { log: true })
		cy.clearLocalStorage('your item', { log: true })
		cy.title().should('include', 'Zero - Log in')
	})
	it('Should fill username', () => {
		//Set var username to this locator
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('Some Invalid Name', { delay: 50 })
	})
	it('Should fill password', () => {
		cy.get('#user_password').clear()
		cy.get('#user_password').type('Some Invalid password', { delay: 50 })
	})
	it('Should mark checkbox', () => {
		cy.get('input[type="checkbox"]').click()
		cy.wait(5000)
	})
	it('Should submit login form', () => {
		//cy.get('[value="Sign in"]').click()
		// Or
		cy.contains('Sign in').click()
	})
	it('Should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			//Chaining Assertions ---> contain value in the message
			.and('contain', 'Login and/or password are wrong.')
	})
})
