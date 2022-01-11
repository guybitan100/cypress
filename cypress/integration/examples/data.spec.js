describe('Write / Read Data to Json / Text File', () => {
	it('should write data to tson', () => {
		cy.writeFile('log.json', { name: 'Guy', age: 29 })
	})
})
