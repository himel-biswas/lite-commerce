import React from 'react'
import {Button, Typography} from '@mui/material';

import './categories.css'
import { categories } from "../../../data";


const Categories = () => {
  return (
    <div className='categories-container'>
        {categories.map((item) => (
            <div className='category-item'>
                <img src={item.img} />
                <div className='image-info'> 
                    <div className='image-title'>{item.title}</div>
                    <Button variant="outlined">SHOP NOW</Button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Categories