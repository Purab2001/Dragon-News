import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' speed={70} pauseOnHover={true}>
                <p className='font-bold'>Bangladesh records highest export growth in three years as global demand rebounds.</p>
                <p className='font-bold'>Tech innovation hub opens in Dhaka, aims to support 500 startups by 2026.</p>
                <p className='font-bold'>National cricket team secures dramatic win against Australia in T20 series opener.</p>
                <p className='font-bold'>Government announces new climate resilience plan to protect coastal communities.</p>
                <p className='font-bold'>International film festival returns to Dhaka with record number of submissions.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;