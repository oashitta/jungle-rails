describe("view single product details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    // cy.visit("/");
  });

  it("There are products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There are 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });

  it("should navigate to product detail page", () => {
    cy.get(".products article").first().click();
    cy.url().should("include", "/products/");
    cy.get(".products-show").should("be.visible");
  });
});

// // alternate implementation
// it("should navigate to product detail page", () => {
//   cy.get(".products article")
//     .first()
//     .within(() => {
//       cy.get("a").click();
//       cy.url().should("include", "/products/");
//     });
//   cy.get(".products-show").should("be.visible");
// });
