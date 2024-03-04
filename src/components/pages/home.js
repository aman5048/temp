import React from "react";
import { Link } from "react-router-dom";
import ResponsiveCarousel from "./corusal";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <ResponsiveCarousel />
            <Footer/>
        </div>
    );
}