import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 text-lg'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-full">
                        <button className="btn bg-base-100 hover:bg-base-200 border-base-300 justify-start join-item w-full">
                            <FaFacebook size={18} className='mx-1' /> Facebook
                        </button>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-full">
                        <button className="btn bg-base-100 hover:bg-base-200 border-base-300 justify-start join-item w-full">
                            <FaTwitter size={18} className='mx-1' /> Twitter
                        </button>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-full">
                        <button className="btn bg-base-100 hover:bg-base-200 border-base-300 justify-start join-item w-full">
                            <FaInstagram size={18} className='mx-1' /> Instagram
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FindUs;