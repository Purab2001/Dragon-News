import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 pt-12'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <div className='font-semibold flex gap-1'>
                <span className='text-black'>{format(new Date(), "EEEE")},</span>
                <span className='text-accent'>{format(new Date(), "MMMM dd, yyyy")}</span>
            </div>
        </div>
    );
};

export default Header;