// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";
import qs from "query-string";

// * Icons
import { AiFillGithub } from "react-icons/ai";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

// import { gapi } from "gapi-script";

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
import { DeployUrl } from "../../Services/MockServices";
import { AuthButtons } from "../Login/LoginStyle";

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
    const url = `${DeployUrl}/sign-up`;
    const body = { name, email, password, confirmPassword };
    axios
      .post(url, body)
      .then((res) => {
        setLoading(false);
        setDisable(false);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
        setDisable(false);
        console.log(err);
      });
  }

  function redirectGitHub() {
    const GithubAuthURL = "https://github.com/login/oauth/authorize";
    const OAuthParams = {
      response_type: "code",
      scope: "user public_repo",
      client_id: process.env.REACT_APP_CLIENT_ID_REGISTER,
      redirect_url: process.env.REACT_APP_REDIRECT_REGISTER_URL,
      state: "supermercash",
    };

    const GitHubQS = qs.stringify(OAuthParams);
    const AuthorizationURL = `${GithubAuthURL}?${GitHubQS}`;
    window.location.href = AuthorizationURL;
  }

  function GoogleLoginSuccess(token) {
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_BACK_END_URL}auth/register/google`, {
        token,
      })
      .then((response) => {
        const token = response.data;
        localStorage.setItem("token", token);
        setLoading(false);
        setDisable(false);
        navigate("/menu");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  function GoogleLoginFailure(err) {
    console.log("err", err);
  }

  window.onload = () => {
    const { code } = qs.parseUrl(window.location.href).query;
    if (code) {
      setLoading(true);
      setDisable(true);
      axios
        .post(`${process.env.REACT_APP_BACK_END_URL}auth/register`, {
          code,
        })
        .then((response) => {
          const token = response.data;
          localStorage.setItem("token", token);
          setLoading(false);
          setDisable(false);
          navigate("/menu");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

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
            data-cy-id="Name"
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            disabled={disable}
          />
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
          <Input
            data-cy-id="ConfirmPassword"
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
                data-cy-id="RegisterButton"
                color="#0B8DD7"
                disabled={disable}
              >
                Cadastrar
              </Button>
              <Button
                color="#34D70B"
                onClick={() => navigate("/")}
                disabled={disable}
              >
                Entrar
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
        <AuthButtons>
          <Button
            color="#000000"
            disabled={disable}
            onClick={() => {
              redirectGitHub();
            }}
          >
            <AiFillGithub />
            GitHub
          </Button>
          <div className="google-button">
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID_LOGIN}
            >
              <GoogleLogin
                onSuccess={(credentialResponse) =>
                  GoogleLoginSuccess(credentialResponse.credential)
                }
                onError={(err) => GoogleLoginFailure(err)}
              />
            </GoogleOAuthProvider>
          </div>
        </AuthButtons>
      </Main>
    </AuthContainer>
  );
}

export default RegisterScreen;
