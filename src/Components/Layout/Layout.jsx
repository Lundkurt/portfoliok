import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Header/>
      <div className='wrapper'>
       <div className='width-80 automargin'>{children}</div> 
      </div>
      <Footer/>
    </>
  )
}

export default Layout
