import React, { useState } from 'react';
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
    const app = apps.find((p) => String(p.id) === id)
    const [installed, setInstalled] = useState(false)
    if (loading) return <p>Loading...</p>
    const {title, companyName, image, size, reviews, downloads, ratingAvg, ratings, description} = app;

    const handleToInstalation = () => {
        const existingList = JSON.parse(localStorage.getItem("installation"));

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
                <div className="card">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-9 p-3">
                        <div className="col-span-1">
                            <img src={image} alt="demoApp" className="h-64 w-full rounded-lg" />
                        </div>
                        <div className="w-full col-span-2">
                            <h1 className="text-3xl font-bold">
                                App Name: <span className="text-gray-500">{title}</span>
                            </h1>
                            <p className="text-sm font-bold">
                                Developed By: <span className=" font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">{companyName}</span>
                            </p>
                            <div className="border-t border-gray-300 w-full my-4" />
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <div className="space-y-1">
                                    <img src={downApp} alt="" />
                                    <p className="text-lg">Downloads</p>
                                    <h1 className="text-3xl font-bold">{downloads}</h1>
                                </div>
                                <div className="space-y-1">
                                    <img src={ratApp} alt="" />
                                    <p className="text-lg">Avarage Ratings</p>
                                    <h1 className="text-3xl font-bold">{ratingAvg}</h1>
                                </div>
                                <div className="space-y-1">
                                    <img src={reviewApp} alt="" />
                                    <p className="text-lg">Total Reviews</p>
                                    <h1 className="text-3xl font-bold">{reviews}</h1>
                                </div>
                            </div>
                            {!installed ? (
                                <button to={`/app/${id}`} onClick={handleToInstalation} className="btn mt-4 bg-green-400 text-xl text-white">
                                    Install Now ({size})
                                </button>
                            ) : (
                                <button  className="btn mt-4 bg-green-400 text-xl text-white">
                                    Installed 
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 w-full" />
            <div className="p-3">
                <h1 className="text-2xl font-bold">Ratings</h1>
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
            <div>
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