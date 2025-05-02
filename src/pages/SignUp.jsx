import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const { createUser, setUser, updateUserProfile } = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Reset any previous errors
        setNameError('');
        setEmailError('');

        const form = e.target;
        const name = form.name.value;
        if (name.length < 4) {
            setNameError('Name must be at least 4 characters long');
            return;
        }

        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoUrl });
                        navigate('/');
                    })
                    .catch(error => {
                        console.error('Error updating profile:', error);
                        setUser(user);
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error Code:', errorCode);
                console.error('Error Message:', errorMessage);

                // Handle email already in use error
                if (errorCode === 'auth/email-already-in-use') {
                    setEmailError('This email is already registered. Try logging in instead.');
                } else {
                    setEmailError(errorMessage);
                }
            });
    }

    return (
        <div className="bg-white p-8 w-full max-w-md min-h-[calc(100vh-200px)] flex flex-col justify-center mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-700">Register your account</h2>

            <div className='border-b-2 border-base-200 my-6'></div>

            <form onSubmit={handleSignUp}>
                <div className="mb-4">
                    <label htmlFor="name" className="text-primary font-medium block mb-2">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded bg-gray-100 border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
                        required
                    />
                    {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="photoUrl" className="text-primary font-medium block mb-2">Photo URL</label>
                    <input
                        type="url"
                        name="photoUrl"
                        placeholder="Enter your photo URL"
                        className="w-full px-4 py-3 rounded bg-gray-100 border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="text-primary font-medium block mb-2">Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded bg-gray-100 border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
                        required
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="text-primary font-medium block mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 rounded bg-gray-100 border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
                        required
                    />
                </div>

                <div className="mb-6">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="terms"
                            className="mr-2"
                            required
                        />
                        <label htmlFor="terms" className="text-accent">
                            <span className='text-gray-800'>Accept</span> Terms & Conditions
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full btn btn-primary shadow-none cursor-pointer"
                >
                    Register
                </button>
            </form>

            <div className="text-center mt-4 text-gray-600">
                Already Have An Account? <Link to="/auth/login" className="text-red-500">Login</Link>
            </div>
        </div>
    );
};

export default SignUp;