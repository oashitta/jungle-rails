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

  it("cart should increase by 1 when add to cart button is clicked", () => {
    // cy.contains("My Cart (0)").should("exist");
    cy.get(".products article .btn").first().click({ force: true });
    // cy.contains("My Cart (0)").should("not.exist");
    cy.contains("My Cart (1)").should("exist");
  });
});
