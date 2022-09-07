import React from 'react'
import amercianexpress from '../images/amercianexpress.png'
import visa from '../images/visa.png'
import Mastercard from '../images/mastercard.png'
import Paypal from '../images/paypal.png'

const Footer = ( => {
    return (
        <>
         <p className = "place-content-center py-4">contact@shopname.com</p>
        <div className='flex-wrap px-13'>
        <img src="../images/Visa.png" alt="logo Visa" />
        <img src="../images/Mastercard.png" alt="logo Mastercard" />
        <img src="../images/amercianexpress.png" alt="logo American Express" />
        <img src="../images/Paypal.svg" alt="logo Paypal" />
        </div>
        <p className='place-content-center'>2022</p>
        
        </>
    )
})

export default Footer