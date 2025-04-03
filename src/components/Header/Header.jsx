import React, { useState } from 'react'
import {Container, LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo'

function Header() {

  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  {
      name: "Account",
      slug: "/account",
      active: authStatus,
  },
  ]

  const [isMobleMenu , setIsMobileMenu] = useState(false)
  const handleMenu = ()=>{
      setIsMobileMenu(!isMobleMenu)
  }


  return (
   <header className='py-3 shadow bg-gray-100 sticky top-0 mb-5 z-10 '>
      <Container>
        <nav className='flex relative items-center'>
          <div className='mr-4 '>
            <Link to="/">
            <Logo />
            </Link>
          </div>
          <ul className='hidden md:flex ml-auto'>
            {
              navItems.map((item)=> (
               item.active ? (
               <li key={item.name}>
                <button className='inline-block px-6 py-2 duration-200 cursor-pointer hover:bg-blue-100 rounded-full' 
                onClick={()=> navigate(item.slug)}>
                {item.name}</button>
               </li>) : null
              ))
            }
             {authStatus && (
              <li>
                <LogoutBtn />
              </li>
             )}
          </ul>

          <button type='button' onClick={handleMenu} className="block ml-auto md:hidden cursor-pointer">
          &#9776;
          </button>
          { isMobleMenu &&

          <div id='mobile-menu' className='w-1/2  bg-white block absolute md:hidden top-0 right-0 duration-200 z-10'>
             <ul>
              <li className='text-right text-2xl' onClick={handleMenu}>X</li>
             {
              navItems.map((item)=> (
               item.active ? (
               <li key={item.name}>
                <button className='inline-block px-6 py-2 duration-200 cursor-pointer hover:bg-blue-100 rounded-3xl' 
                onClick={()=> navigate(item.slug)}>
                {item.name}</button>
               </li>) : null
              ))
            }
             {authStatus && (
              <li>
                <LogoutBtn />
              </li>
             )}
             </ul>
          </div>
          }



        </nav>
      </Container>
   </header>
  )
}

export default Header