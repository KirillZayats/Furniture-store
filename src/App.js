import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { GlobalStyle } from "./styled/AppStyledComp";
import { Theme } from "./styled/Theme";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Pay from "./pages/Pay";
import Details from "./pages/Details";
import Account from "./pages/log/Account";
import Cart from "./pages/Cart";
import Login from "./pages/log/Login";
import { Route, Routes } from "react-router-dom";
import { NAME_SITE } from "./Constants";
import DownUp from "./components/DownUp";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path={`${NAME_SITE}/`} element={<Home />} />
          <Route path={`${NAME_SITE}/contacts`} element={<Contacts />} />
          <Route path={`${NAME_SITE}/about`} element={<AboutUs />} />
          <Route path={`${NAME_SITE}/products`} element={<Products />} />
          <Route path={`${NAME_SITE}/pay`} element={<Pay />} />
          <Route path={`${NAME_SITE}/details`} element={<Details />} />
          <Route path={`${NAME_SITE}/account`} element={<Account />} />
          <Route path={`${NAME_SITE}/cart`} element={<Cart />} />
          <Route path={`${NAME_SITE}/login`} element={<Login />} />
        </Routes>
        <Footer />
      </Provider>
      <DownUp />
    </Theme>
  );
};

export default App;
