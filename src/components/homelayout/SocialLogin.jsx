import React, { use } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const { googleLogin, githubLogin, user } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // If user is logged in, don't render the social login section
    if (user) {
        return null;
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(location.state?.from?.pathname || '/');
            })
            .catch(error => {
                console.error('Error during Google login:', error);
            });
    };

    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                navigate(location.state?.from?.pathname || '/');
            })
            .catch(error => {
                console.error('Error during GitHub login:', error);
            });
    };

    return (
        <div>
            <h2 className='font-bold mb-5 text-lg'>Login With</h2>
            <div className='space-y-3 flex flex-col'>
                <button
                    onClick={handleGoogleLogin}
                    className='btn btn-outline btn-info shadow-none'
                >
                    <FcGoogle size={20} />
                    Login With Google
                </button>
                <button
                    onClick={handleGithubLogin}
                    className='btn btn-outline btn-primary shadow-none'
                >
                    <FaGithub size={20} />
                    Login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;