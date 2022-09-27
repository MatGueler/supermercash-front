// *Hooks
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import { Logo, Main, TextLogo, UserButtons, Clip } from "./LoginStyle";
import { AuthContainer } from "../../Container/ContainerStyle";
import { Input } from "../../Input/InputSyle";
import { Button } from "../../Button/ButtonSyle";

// *Image
import logo from "../../../Assets/Image/Logo.png";
import { useState } from "react";

function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function SignIn(event) {
    event.preventDefault();
    navigate("/menu");
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
          <p>Faça seu login! E comece a economizar!</p>
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
          <UserButtons>
            <Button color="#34D70B">Entrar</Button>
            <Button color="#0B8DD7" onClick={() => navigate("/sign-up")}>
              Cadastrar
            </Button>
          </UserButtons>
        </form>
      </Main>
    </AuthContainer>
  );
}

export default LoginScreen;
