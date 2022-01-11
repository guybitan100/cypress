describe('Write / Read Data to Json / Text File', () => {
	it('should write data to json', () => {
		cy.writeFile('log.json', { name: 'Guy', age: 29 })
	})
	it('should write data to text file', () => {
		cy.writeFile('log.txt', 'Hello World')
	})
})
