// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import {
  Adverts,
  Alert,
  AlertsBox,
  BootBox,
  BoxButton,
  ButtonsMenu,
  ButtonsMessage,
  LoadingBox,
  Main,
  Map,
  Panel,
} from "./MenuStyle";
import { Container } from "../../Container/ContainerStyle";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faInfo,
  faClockRotateLeft,
  faUser,
  faAnglesRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Loading from "../../Loading/Loading";
import { DeployUrl } from "../../Services/MockServices";

// *Image
import BootComponent from "../../Boot/BootComponent";

function MenuScreen() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [bootDisable, setBootDisable] = useState(true);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserInfo(token);
    setTimeout(() => {
      setBootDisable(!bootDisable);
    }, 10000);
  }, []);

  function getUserInfo(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${DeployUrl}/user/me`, config)
      .then((response) => {
        setLoading(true);
        if (response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
        }
        setUserInfo(response.data.userInfo);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

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

  const alertsArray = [
    { text: "Receba cashback" },
    { text: "Alerta de promoções" },
    { text: "-TEMPO\n +DINHEIRO" },
    { text: "+COMPRAS\n +CASHBACK" },
    { text: "Variedade de produtos" },
    { text: "Mais facilidade" },
  ];

  return (
    <>
      {loading ? (
        <Container>
          <Header userInfo={userInfo} />
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
              <ButtonsMessage>
                <h3>Escolha o próximo passo</h3>
                <FontAwesomeIcon icon={faAnglesRight} size="4x" />
              </ButtonsMessage>
              <BoxButton>
                <button
                  data-cy-id="ProductsButton"
                  onClick={() => navigate("/products")}
                >
                  <FontAwesomeIcon icon={faShop} size="2x" />
                </button>
                <p>Escolher produtos</p>
              </BoxButton>
              <BoxButton>
                <button
                  data-cy-id="PerfilButton"
                  onClick={() => navigate("/perfil")}
                >
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </button>
                <p>Veja seu perfil</p>
              </BoxButton>
              <BoxButton>
                <button
                  data-cy-id="InfoButton"
                  onClick={() => {
                    navigate("/questions");
                  }}
                >
                  <FontAwesomeIcon icon={faInfo} size="2x" />
                </button>
                <p>Tire dúvidas</p>
              </BoxButton>
              <BoxButton>
                <button data-cy-id="PerfilButton">
                  <FontAwesomeIcon icon={faClockRotateLeft} size="2x" />
                </button>
                <p>Historico de compras</p>
              </BoxButton>
            </ButtonsMenu>
            <AlertsBox>
              {alertsArray.map((alert) => {
                return (
                  <Alert>
                    <p>{alert.text}</p>
                  </Alert>
                );
              })}
            </AlertsBox>
            <Map>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31760591.28161111!2d-69.73009156372365!3d-13.656224737639535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1664261466349!5m2!1spt-BR!2sbr"></iframe>
              <h3>
                Melhores ofertas próximas a você!{" "}
                <FontAwesomeIcon icon={faLocationDot} />
              </h3>
            </Map>

            {bootDisable ? (
              ""
            ) : (
              <BootComponent />
              // <BootBox
              //   onClick={() => {
              //     alert("Disponível em breve");
              //   }}
              // >
              //   <img src={avatar} alt="" />
              //   <h1>Olá, posso te ajudar?</h1>
              // </BootBox>
            )}
          </Main>
          <Footer />
        </Container>
      ) : (
        <LoadingBox>
          <Loading
            width="100"
            height="100"
            color="#000000"
            secondColor="#000000"
          />
        </LoadingBox>
      )}
    </>
  );
}

export default MenuScreen;
