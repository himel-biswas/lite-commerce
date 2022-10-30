import React from 'react'

import {Typography, InputBase, Button} from '@mui/material';
import { Send } from "@mui/icons-material";

import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <Typography variant="h3" gutterBottom>
            h3. Heading
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
        </Typography>
        <div className='input-container'>
            <input placeholder="Your email" />
            <div class='input-button'>
                <Send />
            </div>
        </div>
    </div>
  )
}

export default Newsletter