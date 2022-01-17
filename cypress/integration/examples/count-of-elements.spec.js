describe('Browser Actions', () => {
	it('Should load current url', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
	})
	it('Should check current url', () => {
		cy.url().should('include', 'index.html')
	})
	it('Should click on Travel link category', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})
	it('Should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11)
	})
})
