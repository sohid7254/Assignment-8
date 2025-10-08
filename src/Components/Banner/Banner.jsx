import React from 'react';
import GooglePic from "../../assets/googleplay.png"
import ApplePic from "../../assets/appleplay.png"
import BannerPic from "../../assets/hero.png"
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto mt-5">
                <div className="flex flex-col justify-center items-center text-center space-y-4 px-3">
                    <h1 className="md:text-7xl text-4xl font-bold">
                        We Build <br />
                        <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Productive</span> Apps
                    </h1>
                    <p className="md:text-xl text-sm text-gray-400">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className="flex justify-center items-center gap-3">
                        <Link to="https://play.google.com/store/games" className="md:btn flex justify-center items-center ">
                            <img src={GooglePic} alt="" className="md:w-7 w-3" />
                            <span className="md:text-lg text-[10px]">Google Play</span>
                        </Link>
                        <Link to="https://www.apple.com/app-store/" className="md:btn  flex justify-center items-center">
                            <img src={ApplePic} alt="" className="md:w-7 w-3" />
                            <span className="md:text-lg text-[10px]">Apple Play</span>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center md:mt-7 mt-5 px-3">
                    <img src={BannerPic} alt="" className="w-180" />
                </div>
            </div>
        </div>
    );
};

export default Banner;