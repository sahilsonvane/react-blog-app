import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumbs({items}) {
  return (
    <nav>
        <ul className='flex'>
            {items?.map((item,index)=>(
                <li className={`mr-1.5 font-medium ${index === 0 ? "text-gray-700" :""}`} key={index}>
                    <Link to={item.path}>{item.label}</Link>
                    {index < items.length - 1 && ' /'}
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default BreadCrumbs