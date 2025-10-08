import React from 'react';
import AppError from "../../assets/App-Error.png"
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className='space-y-5 mt-20'>
                <div className="flex justify-center items-center">
                    <img src={AppError} alt="AppError" className='w-70' />
                </div>
                <div className="text-center space-y-2">
                    <h1 className='text-4xl font-bold'>OPPS!! APP NOT FOUND </h1>
                    <p className='text-xl text-gray-400'>The app you are requesting is not found on our system. Please! try another apps</p>
                    <div className="flex justify-center items-center mb-5">
                        <Link to="/apps" className="btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppNotFound;