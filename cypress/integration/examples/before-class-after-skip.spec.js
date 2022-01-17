//Base Class
class BasePage {
	static loadHomePage() {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	}

	static wait(number) {
		cy.wait(number)
	}
}

//Class
class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView()
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView()
	}
}

//Tests
describe('Scrolling the page', () => {
	before('Load Home Page', () => {
		HomePage.loadHomePage()
	})
	beforeEach('Run before each it block in the describe', () => {})
	it('should scroll up and down the page', () => {
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(5000)
	})
	it.only('Only This step - should scroll up and down the page', () => {
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(5000)
	})
	it.skip('skip this step', () => {})
	afterEach('Run after each it block in the describe', () => {})
	after('Run After All Tests inside describe block are done', () => {})
})
