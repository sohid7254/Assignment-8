import React from 'react';

const LoadingAnimation = ({count = 8}) => {
    return (
        <div className="grid grid-cols-1 md:grid--cols-3 lg:grid-cols-4 gap-4 p-3">
            {Array.from({ length: count }).map((__, i) => (
                <div key={i} className="flex flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            ))}
        </div>
    );
};

export default LoadingAnimation;