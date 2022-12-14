import { faker } from "@faker-js/faker";

// beforeEach(async () => {
//   await cy.request("POST", "http://localhost:5000/e2e/reset", {});
// });

// - Register User
describe("Test register user", () => {
  const url = "http://localhost:3000/sign-up";
  it("Create a new test", () => {
    cy.visit(url);
    const userInfos = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.lorem.word(6),
    };

    // * Write in inputs all informations about recommendation
    cy.get("[data-cy-id=Name]").type(userInfos.name);
    cy.get("[data-cy-id=Email]").type(userInfos.email);
    cy.get("[data-cy-id=Password]").type(userInfos.password);
    cy.get("[data-cy-id=ConfirmPassword]").type(userInfos.password);
    cy.intercept("POST", "http://localhost:5000/sign-up").as("register");
    cy.get("[data-cy-id=RegisterButton]").click();

    cy.wait("@register");

    cy.url().should("equal", "http://localhost:3000/");
  });
});

// - Login User
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

    cy.url().should("equal", "http://localhost:3000/menu");
  });
});
