import React from 'react'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";

import './products.css'
import { popularProducts } from "../../../data";

const Products = () => {
  return (
    <div className='products-container'>
        {popularProducts.map((item) => (
            <div className='product-item' key={item.id}>
                <img src={item.img} />
                <div className='image-info'> 
                    <div className='icon'>
                        <ShoppingCartOutlined />
                    </div>
                    <div className='icon'>
                        <SearchOutlined />
                    </div>
                    <div className='icon'>
                        <FavoriteBorderOutlined />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products