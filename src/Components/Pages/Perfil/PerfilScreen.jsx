// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import {
  BoxInfo,
  LoadingBox,
  Main,
  PerfilImage,
  PerfilInfo,
  ProgressBarBox,
} from "./PerfilStyle";
import { Container } from "../../Container/ContainerStyle";
import ProgressBar from "react-bootstrap/ProgressBar";

// *Image
import { useState } from "react";
import Header from "../../Header/Header";
import { Button } from "../../Button/ButtonSyle";
import { useEffect } from "react";
import Loading from "../../Loading/Loading";
import { Input } from "../../Input/InputSyle";

function PerfilScreen() {
  const navigate = useNavigate();

  const [token, setToken] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [updateInfos, setUpdateInfos] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    getAllproducts();
    getUserInfo(token);
  }, []);

  function getUserInfo(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:5000/user/me`, config)
      .then((response) => {
        setLoading(true);
        setUserInfo(response.data);
        setName(response.data.name);
        setUserImage(response.data.image.urlImage);
        setEmail(response.data.email);
        setAdress(response.data.adress.adress);
        setPhone(response.data.phone.phone);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function getAllproducts() {
    const url = "http://localhost:5000/products";
    axios
      .get(url)
      .then((res) => {
        const products = res.data;
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function UpdateInfos() {
    const url = "http://localhost:5000/user/me";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      name,
      email,
      adress,
      phone,
    };
    axios
      .put(url, body, config)
      .then((res) => {
        getUserInfo(token);
        setUpdateInfos(!updateInfos);
      })
      .catch((err) => {
        alert(err.response.data[0]);
        console.log(err);
      });
  }

  function StackedExample() {
    return (
      <ProgressBar>
        <ProgressBar striped animated variant="success" now={90} key={1} />
      </ProgressBar>
    );
  }

  return (
    <>
      {loading ? (
        <Container>
          <Header userInfo={userInfo} />
          <Main>
            <PerfilInfo>
              <h2>Dados de cadastro</h2>
              <BoxInfo>
                <p>Nome:</p>
                {!updateInfos ? (
                  <p>{name}</p>
                ) : (
                  <Input
                    placeholder="Name"
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name || ""}
                    disabled={disable}
                  />
                )}
              </BoxInfo>
              <BoxInfo>
                <p>Email:</p>
                {!updateInfos ? (
                  <p>{email}</p>
                ) : (
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email || ""}
                    disabled={disable}
                  />
                )}
              </BoxInfo>
              <BoxInfo>
                <p>Endereço:</p>
                {!updateInfos ? (
                  <p>{adress}</p>
                ) : (
                  <Input
                    placeholder="Name"
                    type="text"
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                    value={adress || ""}
                    disabled={disable}
                  />
                )}
              </BoxInfo>
              <BoxInfo>
                <p>Telefone:</p>
                {!updateInfos ? (
                  <p>{phone}</p>
                ) : (
                  <Input
                    placeholder="Telefone"
                    type="text"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone || ""}
                    disabled={disable}
                  />
                )}
              </BoxInfo>
              {!updateInfos ? (
                <Button
                  color="grey"
                  onClick={() => {
                    setUpdateInfos(!updateInfos);
                  }}
                >
                  Atualizar dados
                </Button>
              ) : (
                <Button
                  color="blue"
                  onClick={() => {
                    UpdateInfos();
                  }}
                >
                  Salvar dados
                </Button>
              )}
            </PerfilInfo>
            <PerfilImage>
              <img src={userImage} />
              <ProgressBarBox>
                // ! ESTA DANDO ERRO NA BARRA
                <StackedExample />
                <p>xxx produtos comprados</p>
              </ProgressBarBox>
            </PerfilImage>
          </Main>
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

export default PerfilScreen;
