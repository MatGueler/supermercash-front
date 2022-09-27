import { HeaderBox, Logo, Perfil, SearchBox } from "./HeaderStyle";
import logo from "../../Assets/Image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <HeaderBox>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>
          <span>Supermer</span>
          <span>cash</span>
        </h1>
      </Logo>
      <SearchBox>
        <input placeholder="Pesquisar . . ." />
      </SearchBox>
      <Perfil>
        <p>Olá,fulana</p>
        <FontAwesomeIcon icon={faUser} size="2x" cursor="pointer" />
      </Perfil>
    </HeaderBox>
  );
}

export default Header;
