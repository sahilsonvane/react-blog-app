import React from 'react'
import logo from '../assets/logo.png'
function Logo({width = '100px', align = "center"}) {
  return (
    <div className={`w-[${width}] text-${align} flex items-center`}>
      <img src={logo} alt="logo" className='w-20 '/> <p className='font-semibold text-2xl'>Blogs</p> 
    </div>
  )
}

export default Logo