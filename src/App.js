import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { GlobalStyle } from "./styled/AppStyledComp";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Header />
        <Home />
        <Footer />
    </BrowserRouter>
  );
};

export default App;
