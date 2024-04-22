import React from "react";
import { Link } from "react-router-dom";
import ResponsiveCarousel from "./corusal";
import Navbar from "./Navbar";
import Footer from "./common/footer";
import Editor from "../editing/editor";
import Landing from "./landing";
import Login from "./SignUpPage";
import ProductList from "../products/productList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ResponsiveCarousel />
      <Landing />
      <ProductList />
      {/* <Editor /> */}
      <Footer />
    </div>
  );
}
