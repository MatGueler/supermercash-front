// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";
import LoginScreen from "../Pages/LoginScreen/LoginScreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginScreen />} />
          {/* <Route path={"/sign-up"} element={<RegisterScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
