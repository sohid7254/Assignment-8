import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard/AppsCard';
import { useNavigate } from 'react-router';
import LoadingAnimation from '../Components/LoadingAnimation/LoadingAnimation';

const Apps = () => {
    const navigate = useNavigate();
    const { apps, loading } = useApps();

    const [search, setSearch] = useState('')
    const [searchLoading, setSearchLoading] = useState(false)

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term?apps.filter((app) => app.title.toLocaleLowerCase().includes(term)):apps

    useEffect(()=> {
        if(search){
            setSearchLoading(true)
            const timer = setTimeout(()=>{
                setSearchLoading(false);
            }, 500)
            return () => clearTimeout(timer)
        }else {
            setSearchLoading(false)
        }
    },[search])

    useEffect(() => {
        if(term && searchedApps.length === 0){
            navigate("/not-found")
        }
    },[term, searchedApps, navigate])
    


    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center my-6 space-y-2 px-3">
                <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold">Our All Applications</h1>
                <p className="text-sm font-semibold text-gray-500">Explore All Apps on the Market developed by us.We code for millions</p>
            </div>
            <div className="flex justify-between items-center px-4">
                <h1 className="md:text-xl text-sm font-semibold">
                    <span>({searchedApps.length})</span>Apps Found
                </h1>
                <label className="input w-50 md:w-70">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search App" />
                </label>
            </div>
            {loading || searchLoading? (
                <LoadingAnimation/>
            ) : (
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 my-4">
                    {searchedApps.map((app) => (
                        <AppsCard key={app.id} app={app}></AppsCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Apps;