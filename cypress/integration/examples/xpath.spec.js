describe('Xpath with Cypress Example ', () => {
	before('Load Home Page', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	})
	it('it should click on element using xPath', () => {
		cy.xpath('//button[@id="signin_button"]').should('be.visible')
		cy.xpath('//button[@id="signin_button"]').click()
	})
	it('it should display login form', () => {
		//Verify only 1 form of login
		cy.xpath('//form').should('have.length', 1)
	})
})
