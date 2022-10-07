import { faker } from "@faker-js/faker";

// beforeEach(async () => {
//   await cy.request("POST", "http://localhost:5000/e2e/reset", {});
// });

// - Add products or remove itens on user cart
describe("Test login user", () => {
  const url = "http://localhost:3000/";
  it("Login a new user", () => {
    cy.visit(url);
    const userInfos = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.lorem.word(6),
    };

    cy.RegisterUser({ ...userInfos, confirmPassword: userInfos.password });

    // * Write in inputs all informations about recommendation
    cy.get("[data-cy-id=Email]").type(userInfos.email);
    cy.get("[data-cy-id=Password]").type(userInfos.password);
    cy.intercept("POST", "http://localhost:5000/sign-in").as("login");
    cy.get("[data-cy-id=SigninButton]").click();

    cy.wait("@login");

    // * Write in inputs all informations about recommendation
    cy.get("[data-cy-id=ProductsButton]").click();

    cy.url().should("equal", "http://localhost:3000/products");
  });
});
