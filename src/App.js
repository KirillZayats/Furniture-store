import React, { useEffect, Suspense, lazy } from "react";
import {
  ContainerLoader,
  ContainerProvider,
  GlobalStyle,
} from "./styled/AppStyledComp";
import { Theme } from "./styled/Theme";
import { Route, Routes } from "react-router-dom";
import DownUp from "./components/DownUp";
import { useSelector } from "react-redux";
import { useAction } from "./hooks/useAction";
import { InfinitySpin } from "react-loader-spinner";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Products = lazy(() => import("./pages/Products"));
const Pay = lazy(() => import("./pages/Pay"));
const Details = lazy(() => import("./pages/Details"));
const Account = lazy(() => import("./pages/log/Account"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/log/Login"));

export const App = () => {
  const { getDataProducts } = useAction();

  const {isLoadingProducts } = useSelector(
    (state) => state.products
  );
  const {isLoadingCategories } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    getDataProducts("products");
    getDataProducts("categories");
  }, []);

  return (
    <Theme>
      <GlobalStyle />

      <Suspense
        fallback={
          <ContainerLoader>
            <InfinitySpin width="200" color="#000" />
          </ContainerLoader>
        }
      >
        {isLoadingProducts && isLoadingCategories && (
          <ContainerProvider>
            <Header />
            <Routes>
              <Route path={`/`} element={<Home/>} />
              <Route path={`/contacts`} element={<Contacts />} />
              <Route path={`/about`} element={<AboutUs />} />
              <Route path={`/products`} element={<Products />} />
              <Route path={`/cart/pay`} element={<Pay />} />
              <Route path={`/products/details/:id/pay`} element={<Pay />} />
              <Route path={`/products/details/:id`} element={<Details/>} />
              <Route path={`/account`} element={<Account />} />
              <Route path={`/cart`} element={<Cart />} />
              <Route path={`/login`} element={<Login />} />
            </Routes>
            <Footer />
            <DownUp />
          </ContainerProvider>
        )}
      </Suspense>
    </Theme>
  );
};

export default App;
