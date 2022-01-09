describe('Browser Actions', () => {
	it('Should load current url', () => {
		cy.visit('https://example.com/', { timeout: 10000 })
		cy.url().should('include', 'example.com')
		cy.log('Before reload')
		cy.reload()
		cy.log('After reload')
	})

	it('Should wait for 3 seconds', () => {
		cy.wait(30000)
	})
	it('check correct element in the page', () => {
		cy.get('h1').should('be.visible')
	})
	it('check incorrect element in the page', () => {
		cy.get('h6').should('not.be.visible')
	})
	it('Print to log', () => {
		cy.log('lalallalalal')
	})
})
