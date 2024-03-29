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
import { DeployUrl } from "../../Services/MockServices";

function PerfilScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [productsHistoric, setProductsHistoric] = useState(0);

  const [updateInfos, setUpdateInfos] = useState(false);
  const [updateImage, setUpdateImage] = useState(false);

  useEffect(() => {
    getUserInfo();
    getAllproducts();
    getProductsHistoric();
  }, []);

  function getProductsHistoric() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${DeployUrl}/products/historic`, config)
      .then((response) => {
        setProductsHistoric(response.data.quantifyProducts);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function getUserInfo() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${DeployUrl}/user/me`, config)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
        }
        setUserInfo(response.data.userInfo);
        setLoading(true);
        setName(response.data.userInfo.name);
        setUserImage(response.data.userInfo.image.urlImage);
        setEmail(response.data.userInfo.email);
        setAdress(response.data.userInfo.adress.adress);
        setPhone(response.data.userInfo.phone.phone);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function getAllproducts() {
    const url = `${DeployUrl}/products`;
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
    const token = localStorage.getItem("token");
    const url = `${DeployUrl}/user/me`;
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

  function UpdateImage() {
    const token = localStorage.getItem("token");
    const url = `${DeployUrl}/user/me/image`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      userImage,
    };
    axios
      .put(url, body, config)
      .then((res) => {
        getUserInfo();
        setUpdateImage(!updateImage);
      })
      .catch((err) => {
        alert(err.response.data[0]);
        console.log(err);
      });
  }

  function StackedExample() {
    return (
      <ProgressBar>
        <ProgressBar
          striped
          animated
          variant="success"
          now={(productsHistoric / 1000) * 100}
          key={1}
        />
      </ProgressBar>
    );
  }

  return (
    <>
      {loading ? (
        <Container>
          <Header userInfo={userInfo} />
          <Main>
            <PerfilImage>
              <img src={userImage} />
              {!updateImage ? (
                <Button
                  data-cy-id="UpdateImage"
                  color="grey"
                  onClick={() => {
                    setUpdateImage(!updateImage);
                  }}
                >
                  Mudar imagem
                </Button>
              ) : (
                <>
                  <Input
                    data-cy-id="UrlImage"
                    placeholder="Url da imagem"
                    type="text"
                    onChange={(e) => {
                      setUserImage(e.target.value);
                    }}
                    value={userImage || ""}
                    disabled={disable}
                  />
                  <Button
                    data-cy-id="SaveImage"
                    color="grey"
                    onClick={() => {
                      UpdateImage();
                    }}
                  >
                    Salvar Imagem
                  </Button>
                </>
              )}
              <ProgressBarBox>
                <StackedExample />
                <p>{productsHistoric} produtos comprados</p>
              </ProgressBarBox>
            </PerfilImage>
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
