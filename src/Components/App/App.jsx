// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";
import LoginScreen from "../Pages/Login/LoginScreen";
import MenuScreen from "../Pages/Menu/MenuScreen";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
