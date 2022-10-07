// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

// *Components
import {
  Legend,
  Main,
  Product,
  ProductsBox,
  Add,
  ProductInfo,
  LoadingBox,
  BoxButton,
} from "./CartStyle";
import { Container } from "../../Container/ContainerStyle";
import Header from "../../Header/Header";

// *Image
import logo from "../../../Assets/Image/Logo.png";
import Loading from "../../Loading/Loading";
import { useEffect, useState } from "react";
import PaymentScreen from "../PaymentPage/PaymentScreen";
import { DeployUrl } from "../../Services/MockServices";

function CartScreen() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [quantifyProducts, setQuantifuProducts] = useState(0);
  const [userInfo, setUserInfo] = useState("");
  const [cartsBySupermercat, setCartsBySupermercat] = useState([]);

  useEffect(() => {
    getUserInfo();
    getCartValues();
  }, [payment]);

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
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function getCartValues() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${DeployUrl}/cart`, config)
      .then((response) => {
        // ? TRATAR CASO ONDE NÃO EXISTA SUPERMERCADO CADASTRADO OU SEM PRODUTOS CADASTRADOS!!!!!!!!!!!
        setCartsBySupermercat(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function BuildPodium({ index, item }) {
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

  function getQuantifyProducts() {
    getUserInfo();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${DeployUrl}/cart/products`, config)
      .then((response) => {
        setQuantifuProducts(response.data.quantify);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function AddSupermarketValue({ item, index }) {
    return (
      <Product>
        <BuildPodium index={index} item={item} />
        <p>Cashback</p>
        <p>R$ {item.total}</p>
        <Add>
          <img
            data-cy-id={item.supermarket}
            src={logo}
            alt="logo"
            onClick={() => {
              getQuantifyProducts();
              setTotalValue(item.total);
              setPayment(!payment);
            }}
          />
        </Add>
      </Product>
    );
  }

  return (
    <>
      {loading ? (
        <Container>
          {payment ? (
            <PaymentScreen
              quantifyProducts={quantifyProducts}
              totalValue={totalValue}
              payment={payment}
              setPayment={setPayment}
            />
          ) : (
            ""
          )}
          <Header userInfo={userInfo} />
          <Main>
            <BoxButton onClick={() => navigate("/products")}>
              <button>
                <FontAwesomeIcon icon={faShop} size="1x" />
              </button>
              <p>Continue adicionando mais produtos ao seu carrinho!</p>
            </BoxButton>
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
