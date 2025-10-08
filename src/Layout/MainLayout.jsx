import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=" bg-[#d2d2d23d] flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 max-w-screen mx-auto w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;