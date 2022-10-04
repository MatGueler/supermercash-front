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
import { ProgressBar } from "react-bootstrap";

// *Image
import { useState } from "react";
import Header from "../../Header/Header";
import { Button } from "../../Button/ButtonSyle";
import { useEffect } from "react";
import Loading from "../../Loading/Loading";
import { Input } from "../../Input/InputSyle";
import StackedExample from "../../ProgressBar/ProgressBar";

function PerfilScreen() {
  const navigate = useNavigate();

  const n = "mateus";

  const [name, setName] = useState(n);
  const [email, setEmail] = useState(n);
  const [phone, setPhone] = useState(n);
  const [adress, setAdress] = useState(n);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [updateInfos, setUpdateInfos] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
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

  function AddProductCart(name, setQuantify, token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      name,
    };
    axios
      .post(`http://localhost:5000/products`, body, config)
      .then((response) => {
        getQuantify(name, setQuantify, token);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function getQuantify(name, setQuantify, token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:5000/products/quantify/${name}`, config)
      .then((response) => {
        const count = response.data._count;
        setQuantify(count);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
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
                    value={name}
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
                    value={email}
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
                    value={adress}
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
                    value={phone}
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
                    setUpdateInfos(!updateInfos);
                  }}
                >
                  Salvar dados
                </Button>
              )}
            </PerfilInfo>
            <PerfilImage>
              <img src="https://conteudo.imguol.com.br/c/esporte/eb/2022/09/27/neymar-comemora-gol-marcado-pela-selecao-brasileira-contra-a-tunisia-1664308063053_v2_450x600.jpg" />
              <ProgressBarBox>
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
