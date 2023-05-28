import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Pages/Footer/Footer';
import Header from '../../Components/Pages/Header/Header';
import Navbar from '../../Components/Pages/Header/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;