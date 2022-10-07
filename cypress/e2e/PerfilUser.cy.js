import { faker } from "@faker-js/faker";

// beforeEach(async () => {
//   await cy.request("POST", "http://localhost:5000/e2e/reset", {});
// });

// - Go to user perfil
describe("Test go to user perfil", () => {
  const url = "http://localhost:3000/";
  const urlImage =
    "https://s2.glbimg.com/dIkph_Pt0FaIPx4nlnX81sfSR2A=/570x620/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/b/J/OH26bpQlusGRH1dznipw/43-3-.jpg";
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
    cy.get("[data-cy-id=PerfilButton]").click();

    cy.get("[data-cy-id=UpdateImage]").click();
    cy.get("[data-cy-id=UrlImage]").type(urlImage);
    cy.get("[data-cy-id=SaveImage]").click();

    cy.url().should("equal", "http://localhost:3000/perfil");
  });
});
