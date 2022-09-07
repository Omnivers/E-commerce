import React from 'react'
import Credit from '../img/image2.svg'

const Footer = () => {
    return (
        <>
         <p className = "place-content-center py-4">contact@shopname.com</p>
        <div className='flex-wrap px-13'>
        <img src={Credit} alt="logo credit" />
        <p className='place-content-center'>2022</p>
        </div>
        </>
    )
}

export default Footer