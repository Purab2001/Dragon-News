import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex gap-5 justify-center items-center'>
            <span className="loading loading-bars loading-md"></span> 
            <span className="loading loading-bars loading-xl"></span> 
            <span className="loading loading-bars loading-md"></span> 
        </div>
    );
};

export default Loading;