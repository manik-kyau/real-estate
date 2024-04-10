import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='w-[1180px] mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;