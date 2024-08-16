import React from 'react'
import Nav from './Nav'

import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div className='w-full bg-black h-screen flex flex-col' >
        <Nav/>
            {children}
        <Footer/>
    </div>
  )
}

export default Layout