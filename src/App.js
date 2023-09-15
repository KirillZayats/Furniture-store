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
import Cart from "./pages/Cart"
import Login from "./pages/log/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import { nameSite } from "./Constants";
import DownUp from "./components/DownUp";

export const App = () => {


  return (
    <Theme>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path={`${nameSite}/`} element={<Home />} />
          <Route path={`${nameSite}/contacts`} element={<Contacts/>}/>
          <Route path={`${nameSite}/about`} element={<AboutUs/>}/>
          <Route path={`${nameSite}/products`} element={<Products/>}/>
          <Route path={`${nameSite}/pay`} element={<Pay/>}/>
          <Route path={`${nameSite}/details`} element={<Details/>}/>
          <Route path={`${nameSite}/account`} element={<Account/>}/>
          <Route path={`${nameSite}/cart`} element={<Cart/>}/>
          <Route path={`${nameSite}/login`} element={<Login/>}/>
        </Routes>
        <Footer />
        <DownUp/>
    </Theme>
  );
};

export default App;
