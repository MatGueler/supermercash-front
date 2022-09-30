import { HeaderBox, Logo, Perfil, SearchBox } from "./HeaderStyle";
import logo from "../../Assets/Image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Header() {
  let navigate = useNavigate();

  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
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
        setUserInfo(response.data);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  return (
    <HeaderBox>
      <Logo>
        <img src={logo} alt="logo" />
        <h1 onClick={() => navigate("/menu")}>
          <span>Supermer</span>
          <span>cash</span>
        </h1>
      </Logo>
      <SearchBox>
        <input placeholder="Pesquisar . . ." />
      </SearchBox>
      <Perfil>
        <p>Olá, {userInfo ? userInfo.name : ""}</p>
        <img
          src="https://conteudo.imguol.com.br/c/esporte/eb/2022/09/27/neymar-comemora-gol-marcado-pela-selecao-brasileira-contra-a-tunisia-1664308063053_v2_450x600.jpg"
          alt="PerfilPhoto"
          onClick={() => navigate("/perfil")}
        />
        <FontAwesomeIcon
          icon={faPersonRunning}
          size="2x"
          cursor="pointer"
          onClick={() => navigate("/")}
        />
      </Perfil>
    </HeaderBox>
  );
}

export default Header;
