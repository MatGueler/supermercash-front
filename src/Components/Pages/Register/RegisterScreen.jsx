// *Hooks
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import { Clip, Logo, Main, TextLogo, UserButtons } from "./RegisterStyle";
import { AuthContainer } from "../../Container/ContainerStyle";
import { Input } from "../../Input/InputSyle";
import { Button } from "../../Button/ButtonSyle";

// *Image
import logo from "../../../Assets/Image/Logo.png";
import { useState } from "react";

function RegisterScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function SignIn(event) {
    event.preventDefault();
    console.log("oi");
    // const url = "http://localhost:5000/signin";
    // const body = { email, password };
    // axios
    //   .get(url)
    //   .then((res) => {
    //     const token = res.data;
    //     localStorage.setItem("token", token);
    //     navigate("/menu");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <AuthContainer>
      <Logo>
        <img src={logo} alt="logo" />
        <TextLogo>
          <h2>Compare</h2>
          <h2>&</h2>
          <h2>Economize</h2>
        </TextLogo>
      </Logo>
      <Main>
        <Clip>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Clip>
        <h1>
          <span>Supermer</span>
          <span>cash</span>
        </h1>
        <form onSubmit={SignIn}>
          <p>Faça já seu cadastro e ajude o seu bolso!</p>
          <Input
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <Input
            placeholder="Confirmar senha"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          />
          <UserButtons>
            <Button color="#34D70B" onClick={() => navigate("/")}>
              Entrar
            </Button>
            <Button color="#0B8DD7">Cadastrar</Button>
          </UserButtons>
        </form>
      </Main>
    </AuthContainer>
  );
}

export default RegisterScreen;
