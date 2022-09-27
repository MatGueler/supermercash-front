// *Hooks
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import { Clip, Logo, Main, TextLogo, UserButtons } from "./MenuStyle";
import { Container } from "../../Container/ContainerStyle";
import { Input } from "../../Input/InputSyle";
import { Button } from "../../Button/ButtonSyle";

// *Image
import logo from "../../../Assets/Image/Logo.png";
import { useState } from "react";
import Header from "../../Header/Header";

function MenuScreen() {
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
    <Container>
      <Header />
      <Main></Main>
    </Container>
  );
}

export default MenuScreen;
