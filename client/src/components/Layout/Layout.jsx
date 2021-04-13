import React from 'react'
import Navbar from './Navbar';
import SecondNavbar from './SecondNav';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div className='min-w-screen min-h-screen flex flex-col bg-gray-700 font-mono text-gray-100'>
            <Navbar />
            <SecondNavbar />
            <div className='p-10 flex-1 mybg'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout