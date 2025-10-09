import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';

import downApp from "../assets/icon-downloads.png"
import ratApp from "../assets/icon-ratings.png"
import reviewApp from "../assets/icon-review.png"
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import swal from "sweetalert";

const AppDetails = () => {
    const {id} = useParams()
    const {apps, loading} = useApps()
    const [installed, setInstalled] = useState(false)
    const app = apps.find((p) => String(p.id) === id)

    useEffect(() => {
        if (app) {
            const existingList = JSON.parse(localStorage.getItem("installation")) || [];
            const isInstalled = existingList.some((p) => p.id === app.id);
            setInstalled(isInstalled);
        }
    }, [app]);

    if (loading) return <p>Loading...</p>;
    if (!app) return <p>App not found</p>;
    const { title, companyName, image, size, reviews, downloads, ratingAvg, ratings, description } = app;

    const handleToInstalation = () => {
        const existingList = JSON.parse(localStorage.getItem("installation")) || [];
        let updatedList = []
        if(existingList){
            const isDuplicate = existingList.some(p => p.id === app.id)
            if (isDuplicate) {
                alert("This app already in Installation");
                return;
            }
            updatedList = [...existingList, app]
        }else {
            updatedList.push(app)
        }
        // const updatedList = [...existingList, app]
        localStorage.setItem("installation", JSON.stringify(updatedList))
        setInstalled(true)
        swal({
            title: "Installed!",
            text: "App added to your app list.",
            icon: "success",
            timer: 2000,
            buttons: "Ok",
        });
    }

    return (
        <div className="max-w-[1200px] mx-auto my-4">
            <div className="my-10">
                <div className="card ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4">
                        
                        <div className="w-full h-64 md:h-auto flex justify-center items-center">
                            <img src={image} alt="demoApp" className="w-65 object-cover rounded-lg" />
                        </div>
                        <div className="md:col-span-2 flex flex-col justify-between">
                            <div>
                                <h1 className="text-xl md:text-3xl font-bold">
                                    App Name: <span className="text-gray-500">{title}</span>
                                </h1>
                                <p className="text-sm md:text-base font-bold mt-1">
                                    Developed By: <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">{companyName}</span>
                                </p>
                                <div className="border-t border-gray-300 w-full my-4" />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="space-y-1">
                                        <img src={downApp} alt="" className="w-5 h-5" />
                                        <p className="text-sm md:text-lg">Downloads</p>
                                        <h1 className="text-xl md:text-3xl font-bold">{downloads}</h1>
                                    </div>
                                    <div className="space-y-1">
                                        <img src={ratApp} alt="" className="w-5 h-5" />
                                        <p className="text-sm md:text-lg">Average Ratings</p>
                                        <h1 className="text-xl md:text-3xl font-bold">{ratingAvg}</h1>
                                    </div>
                                    <div className="space-y-1">
                                        <img src={reviewApp} alt="" className="w-5 h-5" />
                                        <p className="text-sm md:text-lg">Total Reviews</p>
                                        <h1 className="text-xl md:text-3xl font-bold">{reviews}</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                {!installed ? (
                                    <button onClick={handleToInstalation} className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white text-sm md:text-xl font-semibold px-6 py-2 rounded">
                                        Install Now ({size})
                                    </button>
                                ) : (
                                    <button className="w-full md:w-auto bg-gray-400 text-white text-sm md:text-xl font-semibold px-6 py-2 rounded cursor-not-allowed">Installed</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 w-full" />
            <div className="p-3">
                <h1 className="md:text-2xl font-bold">Ratings</h1>
                <ResponsiveContainer width="90%" height={300}>
                    <ComposedChart
                        layout="vertical"
                        width={90}
                        height={300}
                        data={ratings}
                        margin={{
                            top: 30,
                            right: 40,
                            bottom: 20,
                            left: 0,
                        }}
                    >
                        <XAxis axisLine={false} tickLine={false} type="number" />
                        <YAxis axisLine={false} tickLine={false} dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" barSize={20} fill="#FF8811">
                            <LabelList dataKey="count" position="right" />
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-300 w-full my-4" />
            <div className='px-3'>
                <h1 className="text-xl font-bold">Description</h1>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    {description.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppDetails;