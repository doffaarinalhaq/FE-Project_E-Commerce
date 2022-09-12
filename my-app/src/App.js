import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Detail from "./Pages/Detail";
import AddProduct from "./Pages/AddProduct";
import Cart from "./Pages/Cart";
import EditProduct from "./Pages/EditProduct";
import History from "./Pages/History";
import Login from "./Pages/Login";
import MyStore from "./Pages/MyStore";
// import About from "./pages/About";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mystore" element={<MyStore />} />
        </Routes>
      </BrowserRouter>
    );
  }
}