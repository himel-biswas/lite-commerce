import React from 'react'


import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";

import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <div className='logo'><h2>Lite-Commerce</h2></div>
            <div className='desc'>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </div>
            <div className='social-icon-container'>
                <div className='social-icon'> <Facebook /> </div>
                <div className='social-icon'> <Instagram /> </div>
                <div className='social-icon'> <Twitter /> </div>
                <div className='social-icon'> <Pinterest /> </div>
            </div>
        </div>

        <div className='footer-center'>
            <div className='title'>Useful Links</div>
            <div className='list'>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Man Fashion</li>
                    <li>Woman Fashion</li>
                    <li>Accessories</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>

        <div className='footer-right'>
            <div className='title'><h3>Contact</h3></div>
            <div className='contact-item'>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </div>
            <div className='contact-item'>
                <Phone style={{marginRight:"10px"}}/> +1 234 56 78
            </div>
            <div className='contact-item'>
                <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
            </div>
            <div className='payment'>
             <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div> 
        </div>

    </div>
  )
}

export default Footer