describe("Browser Actions", () => {
  it("Should load current url", () => {
    cy.visit("https://example.com/", { timeout: 10000 });
  });
  it("Should check current url", () => {
    cy.url().should("include", "example.com");
  });
  it("Should wait for 3 seconds", () => {
    cy.wait(30000);
  });
  it("check correct element in the page", () => {
    cy.get("h1").should("be.visible");
  });
  it("check incorrect element in the page", () => {
    cy.get("h6").should("not.be.visible");
  });
});
