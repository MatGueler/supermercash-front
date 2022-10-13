// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

// *Components
import {
  Legend,
  Main,
  Product,
  ProductsBox,
  Add,
  ProductInfo,
  LoadingBox,
  CartButtons,
  Br,
} from "./ProductsStyle";
import { Container } from "../../Container/ContainerStyle";

// *Image
import { useState } from "react";
import Header from "../../Header/Header";
import { Button } from "../../Button/ButtonSyle";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import Loading from "../../Loading/Loading";
import { DeployUrl } from "../../Services/MockServices";

function ProductsScreen() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [token, setToken] = useState("");
  const [updatePage, setUpdatePage] = useState(true);

  useEffect(() => {
    getUserInfo();
    getAllproducts();
  }, [updatePage]);

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

  function AddProductCart(name, setQuantify) {
    const token = localStorage.getItem("token");
    setDisable(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      name,
    };
    axios
      .post(`${DeployUrl}/products`, body, config)
      .then((response) => {
        getQuantify(name, setQuantify);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function RemoveAllProducts() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`${DeployUrl}/products/delete`, config)
      .then((response) => {
        setUpdatePage(!updatePage);
      })
      .catch((error) => {
        alert("Is not possible to remove this item");
        console.error(error);
      });
  }

  function RemoveOneProduct(name, setQuantify) {
    const token = localStorage.getItem("token");
    setDisable(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`${DeployUrl}/products/delete/${name}`, config)
      .then((response) => {
        getQuantify(name, setQuantify);
        setDisable(false);
      })
      .catch((error) => {
        alert(error.response.data);
        console.error(error);
        setDisable(false);
      });
  }

  function getQuantify(name, setQuantify) {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${DeployUrl}/products/quantify/${name}`, config)
      .then((response) => {
        const count = response.data._count;
        setQuantify(count);
        setDisable(false);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function ProductRender({ product }) {
    const [quantify, setQuantify] = useState("");
    getQuantify(product.name, setQuantify, token);
    product["quantify"] = quantify;

    return (
      <Product>
        <ProductInfo>
          <img src={product.urlImage} alt="foto" />
          <p>{product.name}</p>
        </ProductInfo>
        <p>{product.quantify}</p>
        <p>
          R$
          {/* <BreakLine> */}
          <Br></Br>
          {/* </BreakLine> */}
          {Number(product.precoMedio).toFixed(2)}
        </p>
        <Add data-cy-id={product.name}>
          {disable ? (
            <LoadingBox>
              <Loading
                width="100"
                height="100"
                color="#000000"
                secondColor="#000000"
              />
            </LoadingBox>
          ) : (
            <>
              <FontAwesomeIcon
                data-cy-id="ButtonAdd"
                icon={faCirclePlus}
                color="#1D733A"
                size="2x"
                cursor="pointer"
                onClick={() => {
                  AddProductCart(product.name, setQuantify, token);
                }}
              />
              <FontAwesomeIcon
                data-cy-id="ButtonRemove"
                icon={faCircleMinus}
                color="#c51b1b"
                size="2x"
                cursor="pointer"
                onClick={() => {
                  RemoveOneProduct(product.name, setQuantify);
                }}
              />
            </>
          )}
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
                <p>QTD</p>
                <p>Preço médio</p>
                <p>Selecionar</p>
              </Legend>
              {products.length === 0
                ? ""
                : products.map((product, index) => {
                    return <ProductRender key={index} product={product} />;
                  })}
            </ProductsBox>
            <CartButtons>
              <Button color="#c51b1b" onClick={() => navigate("/cart")}>
                Comparar
              </Button>
              <Button color="#8b8b8b" onClick={() => RemoveAllProducts()}>
                Limpar carrinho
              </Button>
            </CartButtons>
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

export default ProductsScreen;
