import React, { useEffect, useState } from 'react';
import downPic from "../assets/icon-downloads.png"
import ratPic from "../assets/icon-ratings.png"
import AppNotFound from '../Components/AppNotFound/AppNotFound';
import swal from "sweetalert";
const Installation = () => {
    const [install, setInstalle] = useState([]);
    const [sort, setSort] = useState('none')

    useEffect(() => {
        const sasvedList = JSON.parse(localStorage.getItem("installation"))
        if(sasvedList){
            setInstalle(sasvedList)
        }
    }, [])

    const getNumber = (num) => {
        if(typeof num === 'string'){
            const value = parseFloat(num)
            if(num.includes('M')){
                return value* 1000000;
            }
            if(num.includes('B')){
                return value* 1000000000;
            }
            return value
        }
        return num
    }
    if(!install.length){
        return (
            <AppNotFound></AppNotFound>
        )
    }
    const sortInstalled = (() => {
        if(sort === "downloads-asc"){
            return [...install].sort(
                (a,b) => getNumber(a.downloads) - getNumber(b.downloads)
            )
        }else if (sort === "downloads-desc"){
            return [...install].sort(
                (a, b) => getNumber(b.downloads) - getNumber(a.downloads)
            )
        }else {
            return install
        }
    })()

    const handleUnstalle = (id) => {
        const existingList = JSON.parse(localStorage.getItem("installation"));
        let updatedList = existingList.filter(p => p.id !== id)
        setInstalle(updatedList)
        localStorage.setItem("installation", JSON.stringify(updatedList))
        swal({
                    title: "Unstalled!",
                    text: "Your App Unstalled from list.",
                    icon: "success",
                    timer: 2000,
                    buttons: "Ok",
                })
    }
    return (
        <div className="max-w-[1200px] mx-auto">
            <title>Hero-App /Installation</title>
            <div>
                <div className="text-center my-6 space-y-2 px-3">
                    <h1 className="md:text-3xl lg:text-3xl text-2xl font-bold">Your Installed Apps</h1>
                    <p className="text-sm text-gray-400">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="flex justify-between py-3 items-center px-4">
                    <h1 className="text-2xl font-semibold">
                        <span className="md:text-xl text-sm font-bold">{sortInstalled.length} Apps Found</span>
                    </h1>

                    <label className="form-control w-full md:max-w-[180px] max-w-[120px]">
                        <select className="select select-bordered" value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="none">Sort By</option>
                            <option value="downloads-asc">Low-&gt;High</option>
                            <option value="downloads-desc">High-&gt;Low</option>
                        </select>
                    </label>
                </div>

                <div className="space-y-3 px-4">
                    {sortInstalled.map((p) => (
                        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 w-full min-h-[100px] my-3 space-y-4 md:space-y-0 md:space-x-4">
                            <div className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0 overflow-hidden">
                                <img src={p.image} alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h2 className="text-base md:text-lg font-semibold text-gray-800">{p.title}</h2>
                                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                                    <div className="flex items-center text-green-600">
                                        <img src={downPic} alt="downPic" className="mr-1 w-3 h-3" />
                                        {p.downloads}
                                    </div>
                                    <div className="flex items-center text-yellow-500">
                                        <img src={ratPic} alt="ratPic" className="mr-1 w-3 h-3" />
                                        {p.ratingAvg}
                                    </div>
                                    <div className="text-gray-500">{p.size}</div>
                                </div>
                            </div>

                            <button onClick={() => handleUnstalle(p.id)} className="bg-green-500 hover:bg-green-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded w-full md:w-auto">
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Installation;
