import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import NewProduct from "../../components/Product";
import ExploreProduct from "../../components/Explore";
import Seller from "../../components/Seller";
import Create from "../../components/Create";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import Layout from "../../components/Layout";


const products = [
  {
    name: "Blue Bird in the Ocean",
    image:
      "https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-one-eye-badge-vector-illustration-png-image_1570355.jpg",
    author: {
      name: "Vikash Pathak",
      username: "@Pathak",
      image: "https://www.svgrepo.com/show/493093/person-who-gargles.svg",
    },
    price: "0.568ETH",
    currentBid: "Current Bid",
    totalBid: "3+ Place Bid",
    tag: "New",
  },
  {
    name: "Blue Bird in the Ocean",
    image:
      "https://png.pngtree.com/png-clipart/20210413/ourmid/pngtree-linear-style-mysterious-eye-tattoo-png-image_3212934.jpg",
    author: {
      name: "Vikash Pathak",
      username: "@Pathak",
      image: "https://www.svgrepo.com/show/493093/person-who-gargles.svg",
    },
    price: "0.568ETH",
    currentBid: "Current Bid",
    totalBid: "12+ Place Bid",
    tag: "New",
  },
];

function DashBoard() {
  return (
    <div className="top">
      <Router>
      <Header />
      <main>
        <article>
          <Routes>
          <Route path="/" element={<Layout products={products} />}/>
          <Route path='/create' element={<Create />} />
          <Route path="/explore" element={<ExploreProduct products={products} />} />
          <Route path='/collections' element={<NewProduct products={products} />} />
          <Route path="/seller" element={<Seller />}/>
          </Routes>
        </article>
      </main>
      </Router>

      <Footer />
    </div>
  );
}

export default DashBoard;
