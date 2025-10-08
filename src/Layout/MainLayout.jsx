import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#d2d2d23d] flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;