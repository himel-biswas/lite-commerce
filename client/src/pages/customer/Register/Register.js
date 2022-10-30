import React from 'react'

import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    TextField
} from '@mui/material';

import './Register.scss'

const Register = () => {
  return (
    <div className='register-container'>
        <Card style={{"width": "40%" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              CREATE AN ACCOUNT
            </Typography>
            <div className="register-form">
                <TextField label="Outlined" variant="outlined" size="small"/>
                <TextField label="Outlined" variant="outlined" size="small"/>
                <TextField label="Outlined" variant="outlined" size="small"/>
                <TextField label="Outlined" variant="outlined" size="small"/>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        
    </div>
  )
}

export default Register