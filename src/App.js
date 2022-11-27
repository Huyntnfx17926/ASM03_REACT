import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Loadding from "./Component/UI/Layout/Loadding";
import Layout from "./Component/UI/Layout/Layout";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrz28oeDFfh2Ojp_ml1_z47doYepeUDVk",
  authDomain: "appboutique-9843f.firebaseapp.com",
  projectId: "appboutique-9843f",
  storageBucket: "appboutique-9843f.appspot.com",
  messagingSenderId: "291072246080",
  appId: "1:291072246080:web:dd70972d0b2c56846a3aa5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const HomePage = React.lazy(() => import("./Page/Home/Home"));
const ShopPage = React.lazy(() => import("./Page/Shop/ShopPage"));
const DetailPage = React.lazy(() => import("./Page/Detail/DetailPage.js"));
const CartPage = React.lazy(() => import("./Page/Cart/CartPage"));
const CheckOut = React.lazy(() => import("./Page/CheckOut/CheckOutPage"));
const LoginPage = React.lazy(() => import("./Page/Login/LoginPage.js"));
const Register = React.lazy(() => import("./Page/Register/RegisterPage"));

function App() {
  return (
    <Layout classname="App">
      <Suspense
        fallback={
          <div className="centered">
            <Loadding />
          </div>
        }
      >
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}>
              {" "}
            </Route>
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/detail/:productId" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </Suspense>
    </Layout>
  );
}

export default App;
