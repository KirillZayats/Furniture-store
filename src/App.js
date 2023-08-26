import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-family: 'Roboto', sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}
`;
const ContainerStyle = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ContainerStyle>
        <Header />
        <Home />
        <Footer />
      </ContainerStyle>
    </BrowserRouter>
  );
};

export default App;
