# <p align = "center"> Supermercash - front </p>

<p align="center" style="background-color: white">
   <img src="https://uploaddeimagens.com.br/images/004/056/154/full/Logo.png?1665418882"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Mateus Gueler-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/MatGueler/supermercash-front?color=4dae71&style=flat-square" />
</p>

## :clipboard: Description/Descrição

The **supermercash** project is based on the problem where a user has several markets close to his residence, and is left with the doubt of which of the markets his **shopping list** would be cheaper?

The application proposes that the user assembles his shopping list with the desired items, then the prices of his purchase will be presented in each of the markets, available in order, so that the user can easily choose the best **cost- benefit**.

In addition to observing the best value for the purchase, the user can make the purchase through the application itself, using information from the **user card**.

🇧🇷

O projeto **supermercash** é baseado no problema onde um usuário tem vários mercados próximos a sua residência, e fica na dúvida de qual dos mercados sua **lista de compras** sairia mais barata?

O aplicativo propõe que o usuário monte sua lista de compras com os itens desejados, em seguida serão apresentados os preços de sua compra em cada um dos mercados, disponibilizados em ordem, para que o usuário possa facilmente escolher o melhor **custo-benefício** .

Além de perceber o melhor valor para a compra, o usuário pode realizar a compra pelo próprio aplicativo, utilizando as informações do **cartão do usuário**.

## :computer: Technologies and Concepts/Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js (v16.17.0)
- JavaScript
- React
- Syled components
- Cypress
- Vercel

---

## :rocket: Routes/Rotas

```yml
Endpoint: '/sign-up'
    - Route to register a new user
```

```yml
Endpoint: '/'
    - Route to make user login
```

```yml
Endpoint: '/menu (autenticada)'
    - Route start for the user to choose the next step in the application
```

```yml
Endpoint: '/products (autenticada)'
    - Route to list available products
```

```yml
Endpoint: '/product/:product (autenticada)'
    - Route to list all users
```

```yml
Endpoint: '/cart (autenticada)'
    - Route to list the value of the shopping cart in each supermarket
```

```yml
Endpoint: '/perfil'
    - Route to present and update user information
```

---

## 🏁 Running the application/Rodando a aplicação

- Deploy

The application is available in deploy on the [VERCEL](https://vercel.com), just access the link below:

https://supermercash-front.vercel.app/

- Local

This project was initialized with [Create React App](https://github.com/facebook/create-react-app), so make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository on your machine:

```
git clone https://github.com/MatGueler/supermercash-front.git
```

Then, inside the folder, run the following command to install the dependencies.

```
npm install
```

Finished the process, just start the server

```
npm run start
```

:stop_sign: Don't forget to run the application server startup, available in the [back-end repository](https://github.com/MatGueler/supermercash-back), to fully test the project.

🇧🇷

-Deploy

A aplicação front-end está disponível em deploy na plataforma [VERCEL](https://vercel.com), basta acessar o link abaixo:

https://supermercash-front.vercel.app/

- Local

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app), portanto, certifique-se de ter a última versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, clone este repositório em sua máquina:

```
git clone git@github.com:MatGueler/supermercash-front.git
```

Em seguida, dentro da pasta, execute o seguinte comando para instalar as dependências.

```
npm install
```

Terminado o processo, basta iniciar a aplicação:

```
npm run start
```

:stop_sign: Não se esqueça de executar a inicialização do servidor de aplicativos, disponível no [repositório back-end](https://github.com/MatGueler/supermercash-back), para testar totalmente o projeto.

---

## :hammer: Testing the application/Testando a aplicação

The tests were carried out on the front-end and back end of this project. Addressing a end-to-end testing.

### **Cypress**

The [Cypress](https://docs.cypress.io/guides/overview/why-cypress) test framework was used as a front-end test framework, for that, run the command below to initialize the cypress:

#### E2E

```
npx cypress open
```

🇧🇷

Os testes foram realizados no front-end e back-end deste projeto. Realizando um teste de ponta a ponta (E2E).

### **Cypress**

O framework [Cypress](https://docs.cypress.io/guides/overview/why-cypress) foi utilizado como framework de teste front-end, para testar a aplicação execute o comando abaixo e inicializar o cypress:

#### E2E

```
npx cypress open
```
