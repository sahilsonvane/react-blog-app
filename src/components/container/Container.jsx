import React from 'react'
import BreadCrumbs from '../BreadCrumbs';


function Container({children,item}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>
            <BreadCrumbs items={item}/>
            {children}
         </div>;
  
}

export default Container