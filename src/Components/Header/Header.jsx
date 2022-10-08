import {
  HeaderBox,
  Logo,
  Perfil,
  Product,
  ProductsBox,
  SearchBox,
} from "./HeaderStyle";
import logo from "../../Assets/Image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";

function Header({ userInfo }) {
  let navigate = useNavigate();

  const [productsList, setProductsLis] = useState([]);

  function GetFirstNameUser() {
    if (userInfo) {
      const firstName = userInfo.name.split(" ");
      return <p>Olá, {firstName[0]}</p>;
    } else {
      return <p></p>;
    }
  }

  function getListProducts(text) {
    axios
      .get(`${DeployUrl}/product/${text}`)
      .then((res) => {
        if (text.length > 3) {
          setProductsLis(res.data);
        } else {
          setProductsLis([]);
        }
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err);
      });
  }

  return (
    <>
      <HeaderBox>
        <Logo>
          <img src={logo} alt="" />
          <h1 onClick={() => navigate("/menu")}>
            <span>Supermer</span>
            <span>cash</span>
          </h1>
        </Logo>
        <SearchBox>
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            onChange={(e) => getListProducts(e.target.value)}
            placeholder="Pesquise um produto"
          />
          <ProductsBox>
            {productsList.length === 0
              ? ""
              : productsList.map((item) => {
                  return <Product>{item}</Product>;
                })}
          </ProductsBox>
        </SearchBox>
        <Perfil>
          {userInfo ? <GetFirstNameUser /> : <button>Entrar</button>}
          <img
            src={userInfo.image.urlImage}
            alt=""
            onClick={() => navigate("/perfil")}
          />
          <FontAwesomeIcon
            icon={faPersonRunning}
            size="2x"
            cursor="pointer"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          />
        </Perfil>
      </HeaderBox>
    </>
  );
}

export default Header;
