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

  const advertsImages = [
    {
      image: "https://m.casasbahia.com.br/assets/images/casasbahia-logo.png",
      name: "casas bahia",
    },
    {
      image: "https://capitalist.com.br/wp-content/uploads/2022/05/magalu.jpg",
      name: "Magazine Luiza",
    },
    {
      image:
        "https://newspapers-global.s3.eu-west-2.amazonaws.com/production/promotons-br/retailers/f2926253-b47f-4bd4-a357-4784eb2e783e-atacadao-logo.jpg",
      name: "Atacadão",
    },
    {
      image:
        "https://logosmarcas.net/wp-content/uploads/2020/11/Carrefour-Logo-1972-1982.jpg",
      name: "Carrefour",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiC97TXpj0leoN3xHZhYDs0Ot_JCaiZaETvgVlUy9&s",
      name: "Carone",
    },
  ];

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
