import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { logIn } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error Code:', errorCode);
                console.error('Error Message:', errorMessage);
            });
    }

    return (
            <div className="bg-white p-8 w-full max-w-md min-h-[calc(100vh-200px)] flex flex-col justify-center mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login your account</h2>

                <div className='border-b-2 border-base-200 my-6'></div>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-primary font-medium block mb-2">Email address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 rounded bg-gray-100 border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="text-primary font-medium block mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded bg-gray-100 border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full btn btn-primary shadow-none cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-4 text-gray-600">
                    Don't Have An Account? <Link to="/auth/register" className="text-red-500">Register</Link>
                </div>
            </div>
    );
};

export default Login;