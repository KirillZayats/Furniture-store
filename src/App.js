import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { GlobalStyle } from "./styled/AppStyledComp";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styled/Theme";
import Contacts from "./pages/Contacts";
import AboutUsP from "./pages/AboutUsP";
import Products from "./pages/Products";
import Pay from "./pages/Pay";
import Details from "./pages/Details";
import Account from "./pages/log/Account";
import Cart from "./pages/Cart"
export const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        {/* <Home /> */}
        {/* <Contacts/> */}
        {/* <AboutUsP/> */}
        {/* <Products/> */}
        {/* <Pay/> */}
        {/* <Details/> */}
        {/* <Account/> */}
        <Cart/>
        <Footer />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
