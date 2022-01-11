describe('Write / Read Data to Json / Text File', () => {
	it('should write data to json file', () => {
		cy.writeFile('log.json', { name: 'Guy', age: 29 })
	})
	it('should write data to text file', () => {
		cy.writeFile('log.txt', 'Hello World')
	})
	it('should read data to json file', () => {
		cy.readFile('log.json').its('age').should('eq', 25)
	})
	it('should read data to txt file', () => {
		cy.readFile('log.txt').its('age').should('eq', 'Hello World')
	})
})
