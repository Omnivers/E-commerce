import React from 'react'
import Credit from '../img/image2.svg'

const Footer = () => {
    return (
        <>
        <div className='grid grid-cols-none place-content-center  px-13'>
            <p className = "ml-28">contact@shopname.com</p>
            <img src={Credit} alt="logo credit" />
            <p className=' ml-44 content-center' >2022</p>
        </div>
        
        </>
    )
}

export default Footer