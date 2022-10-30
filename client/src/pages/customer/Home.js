import { Slider } from '@mui/material'
import React from 'react'

import Navbar from '../../components/customer/Navbar/Navbar'
import Carousel from '../../components/customer/Carousel/Carousel'
import Categories from '../../components/customer/Categories/Categories'
import Products from '../../components/customer/Products/Products'
import Newsletter from '../../components/customer/Newsletter/Newsletter'
import Footer from '../../components/customer/Footer/Footer'


const Home = () => {
  return (
  <>
    <Navbar />

    <Carousel />

    <Categories />

    <Products />

    <Newsletter />

    <Footer />
  </>
  )
}

export default Home