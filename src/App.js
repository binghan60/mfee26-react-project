import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation/BackgroundWaveAnimation';
import './App.css';

import Cart from './pages/Cart/Cart';
import ProductsYu from './pages/Cart/Products-Yu/Products-Yu';
import CartOrderInfo from './pages/CartOrderInfo/CartOrderInfo';
import CartOrderCompleted from './pages/CartOrderCompleted/CartOrderCompleted';
import CartOrderCheck from './pages/CartOrderCheck/CartOrderCheck';

import Membercenter from './pages/member/Membercenter';
import Login from './pages/member/Login';
// import MemberRegister from './pages/member/MemberRegister';
import MemberHistory from './pages/member/MemberHistory';
import MemberPsdchange from './pages/member/MemberPsdchange';

import Product from './pages/Product/Product';
import Content from './pages/Product/Content';

import AdminLogin from './pages/Admin-Willow/AdminLogin';
import News from './pages/Admin-Willow/News';
import Report from './pages/Admin-Willow/Report';
import About from './pages/About/About';

import PostMessage from './pages/Admin-Willow/PostMessage';

//context
import AuthContextProvider from '../src/pages/member/components/AuthConextProvider';

// react router 錄影檔 7/19 14:33
function App() {
  // 設定會員登入狀態 錄影檔 7/19 14:55
  // const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />

        {/* 路由表 */}
        <Routes>
          {/* bing的頁面 */}
          <Route path="/" element={<About />} />

          {/* LoveYu的頁面 */}
          <Route path="ProductsYu" element={<ProductsYu />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="CartOrderCheck" element={<CartOrderCheck />} />
          <Route path="CartOrderCompleted" element={<CartOrderCompleted />} />
          <Route path="CartOrderInfo" element={<CartOrderInfo />} />

          {/* Yu的頁面 */}
          <Route path="Login" element={<Login />} />
          <Route path="Membercenter" element={<Membercenter />} />
          {/* <Route path="MemberRegister" element={<MemberRegister />} /> */}
          <Route path="MemberHistory" element={<MemberHistory />} />
          <Route path="MemberPsdchange" element={<MemberPsdchange />} />

          {/* 莊惟的頁面 */}
          <Route path="Product" element={<Product />} />
          <Route path="Content" element={<Content />} />

          {/* willow的頁面 */}
          <Route path="AdminLogin" element={<AdminLogin />} />
          <Route path="News" element={<News />} />
          <Route path="Report" element={<Report />} />
          <Route path="PostMessage" element={<PostMessage />} />
        </Routes>

        <Footer />
      </AuthContextProvider>
      <BackgroundWaveAnimation />
    </BrowserRouter>
  );
}

export default App;
