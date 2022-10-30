import React from 'react'

import {
    AppBar, 
    Toolbar, 
    InputBase,
    MenuItem,
    Badge
    } from '@mui/material';
import {Search, ShoppingCartOutlined} from '@mui/icons-material';

import './Navbar.css'

const Navbar = () => {
  return (
      <div style={{ background: 'white', color: 'black'}}>
        <Toolbar>

          <div className="left">
            <div className="language">
              EN
            </div>
            <div className="search-bar">
              <Search style={{ color: "gray", fontSize: 16, marginLeft:2 }}/>
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{marginLeft:1}}
              />
            </div>
          </div>

          <div className="center">
            <h2>Lite-Commerce</h2>
          </div>

          <div className="right">
            <MenuItem className="menu-item">REGISTER</MenuItem>
            <MenuItem className="menu-item">SIGN IN</MenuItem>
            <MenuItem className="menu-item">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </div>

        </Toolbar>
      </div>
  )
}

export default Navbar