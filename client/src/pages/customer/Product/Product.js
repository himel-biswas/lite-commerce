import React from 'react'
import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Button,
    OutlinedInput
} from '@mui/material';

import { Add, Remove } from "@mui/icons-material";

import Navbar from '../../../components/customer/Navbar/Navbar'
import Newsletter from '../../../components/customer/Newsletter/Newsletter'
import Footer from '../../../components/customer/Footer/Footer'
import './Product.scss'

const Product = () => {

const [age, setAge] = React.useState('');

  return (
    <div>
        <Navbar />

        <div className="product-container">
            <div className="image-container">
                <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </div>
            <div className="info-container">
                <div className="title">
                    <h3>Denim</h3>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                </div>
                <div className="price">
                    <h4>$ 20</h4>
                </div>
                <div className='filter-container'>
                    <div className="color-container">
                        <div className="color-title">
                            Color
                        </div>
                        <div className="color">
                            
                        </div>
                        <div className="color">
                            
                        </div>
                        <div className="color">
                            
                        </div>
                    </div>
                    <div className="size-container">
                        <div className="title">
                            size
                        </div>
                        <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                //onChange={handleChange}
                                displayEmpty
                                input={<OutlinedInput />}
                                //inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='add-container'>
                    <div className='amount-container'>
                        <Remove />
                        <div className="amount">1</div>
                        <Add />
                    </div>
                    <Button variant="outlined">ADD TO CART</Button>
                </div>
            </div>
        </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default Product