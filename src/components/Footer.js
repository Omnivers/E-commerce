import React from 'react'
import Credit from '../img/image2.svg'

const Footer = () => {
    return (
        <>
        <div className='grid grid-cols-none place-content-center  px-13 bg-gray-900'>
            <p className= "ml-28 cursor-pointer underline underline-offset-2">contact@shopname.com</p>
            <img className="cursor-pointer" src={Credit} alt="logo credit" />
            <p className=' ml-44 content-center' >2022</p>
        </div>
        
        </>
    )
}

export default Footer