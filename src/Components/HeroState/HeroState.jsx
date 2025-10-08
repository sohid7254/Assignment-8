import React from 'react';

const HeroState = () => {
    return (
        <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
            <div className="max-w-[1200px] mx-auto text-center p-9 text-white space-y-4">
                <div>
                    <h1 className="md:text-4xl lg:text-4xl font-semibold">Trusted By Millions, Built For You</h1>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="">
                        <p className="text-[8px] ">Total Downloads</p>
                        <div className="m-2">
                            <span className="text-5xl font-bold">29.5M</span>
                        </div>
                        <p className="text-[8px]">21% More Than Last Month</p>
                    </div>
                    <div className="">
                        <p className="text-[8px]">Total Reviews</p>
                        <div className="m-2">
                            <span className="text-5xl font-bold">906k</span>
                        </div>
                        <p className="text-[8px]">46% More Than Last Month</p>
                    </div>
                    <div className="">
                        <p className="text-[8px]">Active Apps</p>
                        <div className="m-2">
                            <span className="text-5xl font-bold">109+</span>
                        </div>
                        <p className="text-[8px]">32 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroState;