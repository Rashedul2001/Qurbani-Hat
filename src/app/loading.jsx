//Todo: set loader for specific part of the page where data is being fetched. also implement skeleton loader
import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4 min-h-[60vh]">
            <div className="relative" >
                <div className="border-4 border-green-200 border-t-green-600 rounded-full w-12 h-12 animate-spin"></div>
            </div>
        </div>
    );
};

export default Loader;