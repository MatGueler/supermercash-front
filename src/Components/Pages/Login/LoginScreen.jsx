// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import {
  Logo,
  Main,
  TextLogo,
  UserButtons,
  Clip,
  LoadingBox,
} from "./LoginStyle";
import { AuthContainer } from "../../Container/ContainerStyle";
import { Input } from "../../Input/InputSyle";
import { Button } from "../../Button/ButtonSyle";

// *Image
import logo from "../../../Assets/Image/Logo.png";
import { useState } from "react";
import Loading from "../../Loading/Loading";

function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  function SignIn(event) {
    event.preventDefault();
    setLoading(true);
    setDisable(true);
    const url = "http://localhost:5000/sign-in";
    const body = { email, password };
    axios
      .post(url, body)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        setLoading(false);
        setDisable(false);
        navigate("/menu");
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err);
        setLoading(false);
        setDisable(false);
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
          <p>Faça seu login! E comece a economizar!</p>
          <Input
            data-cy-id="Email"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            disabled={disable}
          />
          <Input
            data-cy-id="Password"
            placeholder="Senha"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            disabled={disable}
          />
          {loading === false ? (
            <UserButtons>
              <Button data-cy-id="SigninButton" color="#34D70B" disabled={disable}>
                Entrar
              </Button>
              <Button
                color="#0B8DD7"
                onClick={() => navigate("/sign-up")}
                disabled={disable}
              >
                Cadastrar
              </Button>
            </UserButtons>
          ) : (
            <LoadingBox>
              <Loading
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

export default LoginScreen;
