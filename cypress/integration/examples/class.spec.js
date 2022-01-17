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
	it('should scroll up and down the page', () => {
		HomePage.loadHomePage()
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(5000)
	})
})
