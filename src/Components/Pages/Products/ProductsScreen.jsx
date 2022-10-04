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
} from "./ProductsStyle";
import { Container } from "../../Container/ContainerStyle";

// *Image
import { useState } from "react";
import Header from "../../Header/Header";
import { Button } from "../../Button/ButtonSyle";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import Loading from "../../Loading/Loading";

function ProductsScreen() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [token, setToken] = useState("");
  const [updatePage, setUpdatePage] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    getAllproducts();
    getUserInfo(token);
  }, [updatePage]);

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

  function AddProductCart(name, setQuantify) {
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
      .post(`http://localhost:5000/products`, body, config)
      .then((response) => {
        getQuantify(name, setQuantify);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function RemoveAllProducts() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`http://localhost:5000/products/delete`, config)
      .then((response) => {
        setUpdatePage(!updatePage);
      })
      .catch((error) => {
        alert("Is not possible to remove this item");
        console.error(error);
      });
  }

  function RemoveOneProduct(name, setQuantify) {
    setDisable(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`http://localhost:5000/products/delete/${name}`, config)
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
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:5000/products/quantify/${name}`, config)
      .then((response) => {
        const count = response.data._count;
        setQuantify( count );
        setDisable(false);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function ProductRender({ product }) {
    const [quantify, setQuantify] = useState('');
    getQuantify(product.name, setQuantify, token);
    product["quantify"] = quantify;

    return (
      <Product>
        <ProductInfo>
          <img src={product.urlImage} alt="foto" />
          <p>{product.name}</p>
        </ProductInfo>
        <p>{product.quantify}</p>
        <p>R$ {product.precoMedio}</p>
        <Add>
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
                icon={faCirclePlus}
                color="#1D733A"
                size="2x"
                cursor="pointer"
                onClick={() => {
                  AddProductCart(product.name, setQuantify, token);
                }}
              />
              <FontAwesomeIcon
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
                <p>Quantidade</p>
                <p>Preço médio</p>
                <p>Selecionar</p>
              </Legend>
              {products.length === 0
                ? ""
                : products.map((product, index) => {
                    return <ProductRender key={index} product={product} />;
                  })}
            </ProductsBox>
            <Button color="#c51b1b" onClick={() => navigate("/cart")}>
              Comparar
            </Button>
            <Button color="#8b8b8b" onClick={() => RemoveAllProducts()}>
              Limpar carrinho
            </Button>
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
