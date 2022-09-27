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
} from "./CartStyle";
import { Container } from "../../Container/ContainerStyle";
import Header from "../../Header/Header";

// *Image
import logo from "../../../Assets/Image/Logo.png";

function CartScreen() {
  const navigate = useNavigate();

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
    <>
      <Container>
        <Header />
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
    </>
  );
}

export default CartScreen;
