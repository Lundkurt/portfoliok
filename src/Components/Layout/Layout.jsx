import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Header/>
      <div className='wrapper'>
       <div className='automargin'>{children}</div> 
      </div>
      <Footer/>
    </>
  )
}

export default Layout
