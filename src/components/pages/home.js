import React from "react";
import { Link } from "react-router-dom";
import ResponsiveCarousel from "./corusal";
import Navbar from "./Navbar";
import Footer from "./footer";
import Editor from "../editing/editor";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <ResponsiveCarousel /> */}
      <Editor />
      <Footer />
    </div>
  );
}
