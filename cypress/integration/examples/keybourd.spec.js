describe('Keyboard press simulation', () => {
	it('Should submit search box with pressing Enter', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#searchTerm').type('just some text {enter}')
	})
})
