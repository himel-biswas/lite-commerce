import React from 'react'

import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@mui/material';


import Navbar from '../../../components/customer/Navbar/Navbar'
import Products from '../../../components/customer/Products/Products'
import Newsletter from '../../../components/customer/Newsletter/Newsletter'
import Footer from '../../../components/customer/Footer/Footer'
import './ProductList.css'

const ProductList = () => {
    const [age, setAge] = React.useState('');
  return (
    <div>
        <Navbar />
        <div className="filter-title">
            <h3>Dresses</h3>
        </div>
        <div className="filter-container">
            <div className="filter">
                <div className='filter-text'>Filter Products:</div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        //onChange={handleChange}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value="ageeee"
                        label="Age"
                        //onChange={handleChange}
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
            <div className="filter">
                <div className='filter-text'>Sort Products:</div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value="ageeee"
                        label="Age"
                        //onChange={handleChange}
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
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList