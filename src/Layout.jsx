import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'



const Layout = () => {
    return(
        <div >
        <Header/>
            
        <Outlet/>
            
        <Footer />
        </div>
    );
};

export default Layout;
