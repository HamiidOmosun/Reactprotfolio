import React from 'react'
import logo from "../assets/logo.svg";

const footer = () => {
  return (
    <div className='bg-[#020511] md:px-28'>
      <div className='text-white  p-5 md:pt-20'>
        <p>Say Hello</p>
        <p>hamiidomosun@gmail.com</p>
      </div>

      <div className='flex justify-center pb-5 mt-20 md:pt-20'>
        <img src={logo} alt="Logo" className="w-86 h-auto cursor-pointer md:w-full" />
      </div>
    </div>
  )
}

export default footer