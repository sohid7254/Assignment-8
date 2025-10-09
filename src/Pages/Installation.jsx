import React, { useEffect, useState } from 'react';
import DemoPic from "../assets/demo-app (1).webp"
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
            <div>
                <div className="text-center my-6 space-y-2">
                    <h1 className="text-3xl font-bold">Your Installed Apps</h1>
                    <p className="text-sm text-gray-400">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="flex justify-between py-3 items-center px-4">
                    <h1 className="text-2xl font-semibold">
                        <span className="text-xl font-bold">{sortInstalled.length} Apps Found</span>
                    </h1>

                    <label className="form-control w-full max-w-[180px]">
                        <select className="select select-bordered" value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="none">Sort By Downloads</option>
                            <option value="downloads-asc">Low-&gt;High</option>
                            <option value="downloads-desc">High-&gt;Low</option>
                        </select>
                    </label>
                </div>

                <div className="space-y-3 px-4">
                    {sortInstalled.map((p) => (
                        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 w-full h-[100px] my-3">
                            <dive className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0">
                                <img src={p.image} alt="" />
                            </dive>
                            <div className="ml-4 flex-1">
                                <h2 className="text-lg font-semibold text-gray-800">{p.title}</h2>
                                <div className="flex items-center gap-4 mt-1 text-sm">
                                    <div className="flex items-center text-green-600">
                                        <img src={downPic} alt="downPic" className='mr-1 w-3'/>
                                        {p.downloads}
                                    </div>
                                    <div className="flex items-center text-yellow-500">
                                        <img src={ratPic} alt="ratPic" className='mr-1 w-3' />
                                        {p.ratingAvg}
                                    </div>
                                    <div className="text-gray-500">{p.size}</div>
                                </div>
                            </div>
                            <button onClick={() => handleUnstalle(p.id)} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded">Uninstall</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Installation;
