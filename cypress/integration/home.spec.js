describe("visit homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("navbar should be on the page", () => {
    cy.get(".navbar").should("be.visible");
  });

  it("There are products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There are 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });

  // cy.get().should()
});
