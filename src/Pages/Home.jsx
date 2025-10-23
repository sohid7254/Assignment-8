import React from 'react';
import HeroState from '../Components/HeroState/HeroState';
import Banner from '../Components/Banner/Banner';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard/AppsCard';
import { Link } from 'react-router';
import LoadingAnimation from '../Components/LoadingAnimation/LoadingAnimation';

const Home = () => {
    const {apps, loading} = useApps()
    const featuredApps = apps.slice(0, 8)

    return (
        <>
            <Banner />
            <HeroState />
            <div>
                <title>Hero-App /Home</title>
                <div className="text-center space-y-3 my-6 px-3">
                    <h1 className="text-4xl font-semibold">Trending Apps</h1>
                    <p className="text-sm text-gray-400">Explore All Trending Apps on the Market developed by Us</p>
                </div>
                {loading ? (
                    <LoadingAnimation />
                ) : (
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid--cols-3 lg:grid-cols-4 gap-4 p-3 my-4">
                        {featuredApps.map((app) => (
                            <AppsCard key={app.id} app={app}></AppsCard>
                        ))}
                    </div>
                )}

                <div className="flex justify-center items-center mb-5">
                    <Link to="/apps" className="btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
                        Show All
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;