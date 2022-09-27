// *Hooks
// import axios from "axios";
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

function ProductsScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [img2Advert, setImg2Advert] = useState(true);
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

  function SignIn(event) {
    event.preventDefault();
    console.log("oi");
    // const url = "http://localhost:5000/signin";
    // const body = { email, password };
    // axios
    //   .get(url)
    //   .then((res) => {
    //     const token = res.data;
    //     localStorage.setItem("token", token);
    //     navigate("/menu");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  // setInterval(() => {
  //   setImg2Advert(!img2Advert);
  // }, 16000);

  return (
    // <Container>
    //   <Header />
    //   <Main>

    //   </Main>
    // </Container>
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
            <Product>
              <ProductInfo>
                <img src="" alt="foto" />
                <p>Nome do Produto</p>
              </ProductInfo>
              <p>Quantidade</p>
              <p>Preço médio</p>
              <Add>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  color="#1D733A"
                  size="2x"
                  cursor="pointer"
                />
              </Add>
            </Product>
          </ProductsBox>
          <Button color="#c51b1b">Comparar</Button>
        </Main>
      </Container>
    </>
  );
}

export default ProductsScreen;
