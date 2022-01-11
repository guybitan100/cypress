describe('Write / Read Data to Json / Text File', () => {
	it('should write data to json file', () => {
		cy.writeFile('log.json', { name: 'Guy', age: 29 })
	})
	it('should write data to text file', () => {
		cy.writeFile('log.txt', 'Hello World')
	})
	it('should read data to json file', () => {
		cy.readFile('log.json').its('age').should('eq', 29)
	})
	it('should read data to txt file', () => {
		cy.readFile('log.txt').should('eq', 'Hello World')
	})
	it('should read and verify browser document content', () => {
		cy.visit('https://www.example.com')
		cy.document().its('contentType').should('eq', 'text/html')
		cy.document().should('have.a.property', 'charset').and('eq', 'UTF-8')
	})
})
