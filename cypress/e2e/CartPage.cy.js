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

    const cardInfos = {
      cardHolder: faker.name.fullName(),
      cardNumber: faker.random.numeric(16),
      CVC: faker.random.numeric(3),
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
    cy.intercept("POST", "http://localhost:5000/products").as("Add");
    cy.get("[data-cy-id=Negresco]").within(() => {
      cy.get("[data-cy-id=ButtonAdd]").click();
      cy.wait("@Add");
    });

    cy.contains("Comparar").click();

    cy.get("[data-cy-id=Perim]").click();

    cy.get("[data-cy-id=CardHolder]").type(cardInfos.cardHolder);
    cy.get("[data-cy-id=CardNumber]").type(cardInfos.cardNumber);
    cy.get("[data-cy-id=CVC]").type(cardInfos.CVC);
    cy.get("[data-cy-id=Password]").type(userInfos.password);

    cy.contains("Finalizar compra").click();

    cy.url().should("equal", "http://localhost:3000/cart");
  });
});
