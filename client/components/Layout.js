import React from 'react'
import Hero from "./Hero/Hero";
import NewProduct from "./Product";
import Seller from './Seller';
import Create from './Create';
import ExploreProduct from './Explore';

const Layout = ({products}) => {
  return (
    <div>
        <Hero />
        <NewProduct products={products}/>
        <Create/>
        <ExploreProduct products={products}/>
        <Seller/>
    </div>
  )
}

export default Layout