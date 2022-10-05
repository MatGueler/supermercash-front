import {
  Author,
  Contact,
  FooterBox,
  Logo,
  Perfil,
  SearchBox,
} from "./FooterStyle";

function Footer() {
  return (
    <FooterBox>
      <Author>
        <p>Mateus Gueler Machado</p>
        <p>Rua da barra, vila nova de colares, 256 ,52458-855</p>
        <p>© 2022 Supermercash from Teste</p>
      </Author>
      <Contact>
        <p>Email para contato:</p>
        <p>supermercash@gmail.com</p>
        <p>Telefone para contato:</p>
        <p>(54) 4445-9898</p>
      </Contact>
    </FooterBox>
  );
}

export default Footer;
