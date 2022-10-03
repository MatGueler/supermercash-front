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

  function ProductRender({ product }) {
    const token = localStorage.getItem("token");
    const [quantify, setQuantify] = useState(0);
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
              AddProductCart(product.name, setQuantify, token);
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
            <Button color="#8b8b8b">Limpar carrinho</Button>
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
