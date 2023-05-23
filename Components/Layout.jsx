import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
    console.log('layout');
    console.log(children)
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout