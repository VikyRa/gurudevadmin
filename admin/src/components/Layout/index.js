import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  )

}

export default Layout;