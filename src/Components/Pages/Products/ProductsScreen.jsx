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
} from "./ProductsStyle";
import { Container } from "../../Container/ContainerStyle";

// *Image
import { useState } from "react";
import Header from "../../Header/Header";
import { Button } from "../../Button/ButtonSyle";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";

function ProductsScreen() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

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
    getAllproducts();
  }, []);

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

  function ProductRender({ product }) {
    return (
      <Product>
        <ProductInfo>
          <img src={product.urlImage} alt="foto" />
          <p>{product.name}</p>
        </ProductInfo>
        <p>Quantidade</p>
        <p>R$ {product.precoMedio}</p>
        <Add>
          <FontAwesomeIcon
            icon={faCirclePlus}
            color="#1D733A"
            size="2x"
            cursor="pointer"
          />
        </Add>
      </Product>
    );
  }

  return (
    <>
      <Container>
        <Header />
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
    </>
  );
}

export default ProductsScreen;
