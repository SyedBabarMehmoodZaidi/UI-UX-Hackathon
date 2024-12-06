import React from 'react'
import Hero from './components/Hero/Hero';
import FlashSales from './components/FlashSales/FlashSales';
import Categories from './components/Categories/Categories';
import SellingProducts from './components/SellingProducts/SellingProducts';
import Banner from './components/Banner/Banner';


const Page = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Categories />
      <SellingProducts />
      <Banner /> 
    </div>
  )
}

export default Page;
