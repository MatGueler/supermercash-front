// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";
import CartScreen from "../Pages/Cart/CartScreen";
import LoginScreen from "../Pages/Login/LoginScreen";
import MenuScreen from "../Pages/Menu/MenuScreen";
import PerfilScreen from "../Pages/Perfil/PerfilScreen";
import ProductScreen from "../Pages/Products/Product/ProductScreen";
import ProductsScreen from "../Pages/Products/ProductsScreen";
import RegisterScreen from "../Pages/Register/RegisterScreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginScreen />} />
          <Route path={"/sign-up"} element={<RegisterScreen />} />
          <Route path={"/menu"} element={<MenuScreen />} />
          <Route path={"/products"} element={<ProductsScreen />} />
          <Route path={"/product/:id"} element={<ProductScreen />} />
          <Route path={"/cart"} element={<CartScreen />} />
          <Route path={"/perfil"} element={<PerfilScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
