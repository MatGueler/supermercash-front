// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import {
  Clip,
  LoadingBox,
  Logo,
  Main,
  TextLogo,
  UserButtons,
} from "./RegisterStyle";
import { AuthContainer } from "../../Container/ContainerStyle";
import { Input } from "../../Input/InputSyle";
import { Button } from "../../Button/ButtonSyle";

// *Image
import logo from "../../../Assets/Image/Logo.png";
import { useState } from "react";
import Loading from "../../Loading/Loading";

function RegisterScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  function SignIn(event) {
    event.preventDefault();
    setLoading(!loading);
    setDisable(!disable);
    const url = "http://localhost:5000/sign-up";
    const body = { name, email, password, confirmPassword };
    axios
      .post(url, body)
      .then((res) => {
        setLoading(false);
        setDisable(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        setDisable(false);
        console.log(err);
      });
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
        <img src={logo} alt="logo" />
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
            disabled={disable}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            disabled={disable}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            disabled={disable}
          />
          <Input
            placeholder="Confirmar senha"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            disabled={disable}
          />
          {loading === false ? (
            <UserButtons>
              <Button
                color="#34D70B"
                onClick={() => navigate("/")}
                disabled={disable}
              >
                Entrar
              </Button>
              <Button color="#0B8DD7" disabled={disable}>
                Cadastrar
              </Button>
            </UserButtons>
          ) : (
            <LoadingBox>
              <LoadingBox
                width="100"
                height="100"
                color="#FFFFFF"
                secondColor="#FFFFFF"
              />
            </LoadingBox>
          )}
        </form>
      </Main>
    </AuthContainer>
  );
}

export default RegisterScreen;
