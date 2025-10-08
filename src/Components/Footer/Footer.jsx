import React from 'react';
import { Link } from 'react-router';
import Logo from "../../assets/logo.png"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="bg-[#001931] text-white">
            <div className="max-w-[1200px] mx-auto p-6">
                <div className=" flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={Logo} alt="" className="w-10" />
                        <p>HERO.IO</p>
                    </div>
                    <div>
                        <p>Social Links</p>
                        <div className="flex">
                            <TiSocialFacebookCircular />
                            <TiSocialTwitterCircular />
                            <TiSocialYoutubeCircular />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 w-full my-4" />
                <div className="text-center">
                    <p>Copyright © 2025 - All right reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;