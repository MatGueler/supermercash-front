// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// *Components
import {
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
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import Loading from "../../Loading/Loading";
import StackedExample from "../../ProgressBar/ProgressBar";

function PerfilScreen() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
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
        <ProgressBar striped animated variant="success" now={75} key={1} />
      </ProgressBar>
    );
  }

  return (
    <>
      {loading ? (
        <Container>
          <Header userInfo={userInfo} />
          <Main>
            <PerfilInfo>ola</PerfilInfo>
            <PerfilImage>
              <img src="https://conteudo.imguol.com.br/c/esporte/eb/2022/09/27/neymar-comemora-gol-marcado-pela-selecao-brasileira-contra-a-tunisia-1664308063053_v2_450x600.jpg" />
              <ProgressBarBox>
                <StackedExample />
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
