import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 text-lg'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 hover:bg-base-200 border-base-300 justify-start join-item"><FaFacebook size={18} className='mx-1' /> Facebook</button>
                    <button className="btn bg-base-100 hover:bg-base-200 border-base-300 justify-start join-item"><FaTwitter size={18} className='mx-1' /> Twitter</button>
                    <button className="btn bg-base-100 hover:bg-base-200 border-base-300 justify-start join-item"><FaInstagram size={18} className='mx-1' /> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;