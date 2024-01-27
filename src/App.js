import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./page/HomePage/HomePage";
import Footer from "./component/Footer/Footer";

import TopNav from "./component/TopNav/TopNav";
import HeaderNav from "./component/Navbar/HeaderNav";

import ShopPage from "./page/ShopPage/ShopPage";

import { Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import { WishListProvider } from "./Contexts/wishListContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartListProvider } from "./Contexts/CartContext";
import { CompareListProvider } from "./Contexts/CompareContext";
import CompareList from "./component/CompareList/CompareList";
import CartPage from "./page/CartPage/CartPage";
import WishListPage from "./page/WishListPage/WishListPage";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Registation from "./component/LoginRegister/Registation/Registation";
import Login from "./component/LoginRegister/Login/Login";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Profile from "./Dashboard/Profile/Profile";
import Review from "./Dashboard/Review/Review";
import Seller from "./Dashboard/SellerPage/Seller";

function App() {
  return (
    <CartListProvider>
      <WishListProvider>
        <CompareListProvider>
          <ToastContainer position="top-center" />
          {/* Header section */}
          <TopNav />
          <HeaderNav />
          {/* Main Section */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="compare" element={<CompareList />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="wishlistpage" element={<WishListPage />} />
            <Route path="registation" element={<Registation />} />
            <Route path="login" element={<Login />} />

            {/* start Dashboard Rout */}
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Profile />} />
              <Route path="mycartlist" element={<CartPage />} />
              <Route path="wishlist" element={<WishListPage />} />
              <Route path="review" element={<Review />} />
              <Route path="seller" element={<Seller />} />
              <Route path="comparelist" element={<CompareList />} />
            </Route>

            {/* End Dashboard Rout */}

            <Route path="/:id" element={<ProductDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {/* Footer Section */}
          <Footer />
        </CompareListProvider>
      </WishListProvider>
    </CartListProvider>
  );
}

export default App;
