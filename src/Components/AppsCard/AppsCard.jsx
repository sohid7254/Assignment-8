import React from 'react';
import Demo from "../../assets/demo-app (1).webp"
import ratIcon from "../../assets/icon-ratings.png"
import downIcon from "../../assets/icon-downloads.png"
import { Link } from 'react-router';


const AppsCard = ({app}) => {
    const { image, title, downloads, ratingAvg, id } = app;
    return (
    <Link to={`/appDetails/${id}`}>
        <div className=" rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 p-3">
            <div>
                <img src={image} alt="" className="overflow-hidden object-cover w-full h-[250px] rounded-lg" />
            </div>

            <div className="">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1 bg-[#e2eec5] text-[#14ce93] px-2 border border-gray-200 rounded">
                        <img src={downIcon} alt="downIcon" className="h-4 w-4" />
                        <span className="text-lg font-semibold">{downloads}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#fff0e1] text-[#ff8811] px-2 border border-gray-200 rounded">
                        <img src={ratIcon} alt="downIcon" className="h-4 w-4" />
                        <span className="text-lg font-semibold">{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
    );
};

export default AppsCard;
