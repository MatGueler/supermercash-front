import { HeaderBox, Logo, Perfil, SearchBox } from "./HeaderStyle";
import logo from "../../Assets/Image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Header({ userInfo }) {
  let navigate = useNavigate();

  function GetFirstNameUser() {
    if (userInfo) {
      const firstName = userInfo.name.split(" ");
      return <p>Olá, {firstName[0]}</p>;
    } else {
      return <p></p>;
    }
  }

  return (
    <>
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
          {userInfo ? <GetFirstNameUser /> : <button>Entrar</button>}
          <img
            src={userInfo.image.urlImage}
            alt="PerfilPhoto"
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
