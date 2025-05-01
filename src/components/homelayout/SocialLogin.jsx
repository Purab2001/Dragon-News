import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 text-lg'>Login With</h2>
            <div className='space-y-3 flex flex-col'>
                <button className='btn btn-outline btn-info shadow-none'><FcGoogle size={20} />
                    Login With Google</button>
                <button className='btn btn-outline btn-primary shadow-none'><FaGithub size={20} />
                    Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;