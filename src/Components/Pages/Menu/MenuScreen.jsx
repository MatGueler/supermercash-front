// *Hooks
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import { Adverts, ButtonsMenu, Main, Map, Panel, Panel2 } from "./MenuStyle";
import { Container } from "../../Container/ContainerStyle";
import Footer from "../../Footer/Footer";

// *Image
import { useState } from "react";
import Header from "../../Header/Header";
import { Button } from "../../Button/ButtonSyle";

function MenuScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [img2Advert, setImg2Advert] = useState(true);
  const advertsImages = [
    {
      image: "https://m.casasbahia.com.br/assets/images/casasbahia-logo.png",
      name: "casas bahia",
    },
    {
      image: "https://capitalist.com.br/wp-content/uploads/2022/05/magalu.jpg",
      name: "Magazine Luiza",
    },
    {
      image:
        "https://newspapers-global.s3.eu-west-2.amazonaws.com/production/promotons-br/retailers/f2926253-b47f-4bd4-a357-4784eb2e783e-atacadao-logo.jpg",
      name: "Atacadão",
    },
    {
      image:
        "https://logosmarcas.net/wp-content/uploads/2020/11/Carrefour-Logo-1972-1982.jpg",
      name: "Carrefour",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiC97TXpj0leoN3xHZhYDs0Ot_JCaiZaETvgVlUy9&s",
      name: "Carone",
    },
  ];

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

  // setInterval(() => {
  //   setImg2Advert(!img2Advert);
  // }, 16000);

  return (
    <>
      <Container>
        <Header />
        <Main>
          <Adverts>
            <p>
              Anuncie aqui! Ligue já!
              <br />
              (54) 4448-78965
            </p>
            <Panel>
              <img src={advertsImages[1].image} alt={advertsImages[1].name} />
              <img src={advertsImages[2].image} alt={advertsImages[2].name} />
              <img src={advertsImages[3].image} alt={advertsImages[3].name} />
              <img src={advertsImages[0].image} alt={advertsImages[0].name} />
              <img src={advertsImages[4].image} alt={advertsImages[4].name} />
            </Panel>
          </Adverts>
          <ButtonsMenu>
            <button onClick={() => navigate("/products")}>Produtos</button>
            <button onClick={() => navigate("/perfil")}>Perfil</button>
          </ButtonsMenu>
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
    </>
  );
}

export default MenuScreen;
