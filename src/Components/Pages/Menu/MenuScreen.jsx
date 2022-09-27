// *Hooks
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import { Adverts, Main, Map } from "./MenuStyle";
import { Container } from "../../Container/ContainerStyle";
import Footer from "../../Footer/Footer";

// *Image
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
      <Main>
        <Adverts>oi</Adverts>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31760591.28161111!2d-69.73009156372365!3d-13.656224737639535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1664261466349!5m2!1spt-BR!2sbr"
            width="100%"
            height="200"
          ></iframe>
        </Map>
      </Main>
      <Footer />
    </Container>
  );
}

export default MenuScreen;
