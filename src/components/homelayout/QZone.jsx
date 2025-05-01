import React from 'react';
import Class from '../../assets/class.png';
import Playground from '../../assets/playground.png';
import Swimming from '../../assets/swimming.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold text-lg mb-5'>Q-Zone</h2>
            <div className='flex flex-col items-center space-y-3'>
                <img src={Class} alt="Class" />
                <img src={Playground} alt="Playground" />
                <img src={Swimming} alt="Swimming" />
            </div>
        </div>
    );
};

export default QZone;