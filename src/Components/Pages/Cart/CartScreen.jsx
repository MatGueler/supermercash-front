// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// *Components
import {
  Legend,
  Main,
  Product,
  ProductsBox,
  Add,
  ProductInfo,
  LoadingBox,
} from "./CartStyle";
import { Container } from "../../Container/ContainerStyle";
import Header from "../../Header/Header";

// *Image
import logo from "../../../Assets/Image/Logo.png";
import Loading from "../../Loading/Loading";
import { useEffect, useState } from "react";

function CartScreen() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [cartsBySupermercat, setCartsBySupermercat] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserInfo(token);
    getCartValues(token);
  }, []);

  function getCartValues(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:5000/cart`, config)
      .then((response) => {
        setCartsBySupermercat(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

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

  return (
    <>
      {loading ? (
        <Container>
          <Header userInfo={userInfo} />
          <Main>
            <ProductsBox>
              <Legend>
                <p>Produto</p>
                <p>Cashback</p>
                <p>Preço</p>
                <p>Selecionar</p>
              </Legend>
              <Product>
                <ProductInfo>
                  <h2>1</h2>
                  <p>Nome do Supermercado</p>
                </ProductInfo>
                <p>Cashback</p>
                <p>Preço</p>
                <Add>
                  <img src={logo} alt="logo" />
                </Add>
              </Product>
            </ProductsBox>
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

export default CartScreen;
