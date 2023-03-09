import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { Home, Blog, Shop, Contact } from './pages';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/contact" element={<Contact />} />
          {/*<Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/checkout" element={<Checkout />} />

           <PrivateRoute
            path="/private"
            component={Private}
            element={<Checkout />}
          /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
