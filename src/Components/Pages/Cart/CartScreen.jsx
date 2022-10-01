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
        // ? TRATAR CASO ONDE NÃO EXISTA SUPERMERCADO CADASTRADO OU SEM PRODUTOS CADASTRADOS!!!!!!!!!!!
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

  function BuildPodium({ index, item }) {
    // if (index === 0) {
    //   return (
    //     <ProductInfo color="yellow">
    //       <h2>{index + 1}</h2>
    //       <p>{item.supermarket}</p>
    //     </ProductInfo>
    //   );
    // }
    // if (index === 1) {
    //   return (
    //     <ProductInfo color="grey">
    //       <h2>{index + 1}</h2>
    //       <p>{item.supermarket}</p>
    //     </ProductInfo>
    //   );
    // }
    // if (index === 2) {
    //   return (
    //     <ProductInfo color="brown">
    //       <h2>{index + 1}</h2>
    //       <p>{item.supermarket}</p>
    //     </ProductInfo>
    //   );
    // }
    return (
      <ProductInfo
        color={() => {
          if (index === 0) return "yellow";
          if (index === 1) return "grey";
          if (index === 2) return "brown";
          return "black";
        }}
      >
        <h2>{index + 1}</h2>
        <p>{item.supermarket}</p>
      </ProductInfo>
    );
  }

  function AddSupermarketValue({ item, index }) {
    return (
      <Product>
        <BuildPodium index={index} item={item} />
        <p>Cashback</p>
        <p>R$ {item.total}</p>
        <Add>
          <img src={logo} alt="logo" />
        </Add>
      </Product>
    );
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
              {cartsBySupermercat.length === 0 ? (
                <p>Sem itens no carrinho ou sem supermercados</p>
              ) : (
                cartsBySupermercat.map((item, index) => {
                  return (
                    <AddSupermarketValue
                      key={index}
                      item={item}
                      index={index}
                    />
                  );
                })
              )}
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
