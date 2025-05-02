import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = React.useState('');
    const [resetEmail, setResetEmail] = React.useState('');
    const [resetMessage, setResetMessage] = React.useState('');
    const { logIn, resetPassword } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                navigate(location.state?.from?.pathname || '/');
            })
            .catch(error => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setError(errorCode);
            });
    }

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!resetEmail) {
            setResetMessage('Please enter your email address');
            return;
        }

        resetPassword(resetEmail)
            .then(() => {
                setResetMessage('Password reset email sent! Please check your inbox.');
                setResetEmail('');
            })
            .catch(error => {
                setResetMessage('Error: ' + error.message);
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
                    <div className="mt-3">
                        <button
                            onClick={() => document.getElementById('reset-modal').showModal()}
                            className="text-primary hover:underline cursor-pointer"
                        >
                            Forgot Password?
                        </button>
                    </div>
                </div>

                {
                    error && (
                        <div className="mb-4 text-red-500 text-sm">
                            {error === 'auth/wrong-password' ? 'Wrong password' : 'Invalid email or password'}
                        </div>
                    )
                }


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

            {/* Reset Password Modal */}
            <dialog id="reset-modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Reset Password</h3>
                    <form onSubmit={handleResetPassword}>
                        <div className="mb-4">
                            <label htmlFor="reset-email" className="text-primary font-medium block mb-2">Email address</label>
                            <input
                                type="email"
                                id="reset-email"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 rounded bg-gray-100 border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
                                required
                            />
                        </div>
                        {resetMessage && (
                            <div className="mb-4 text-sm">
                                {resetMessage}
                            </div>
                        )}
                        <div className="modal-action">
                            <button type="submit" className="btn btn-primary shadow-none">Send Reset Link</button>
                            <button
                                type="button"
                                className="btn"
                                onClick={() => {
                                    document.getElementById('reset-modal').close();
                                    setResetMessage('');
                                    setResetEmail('');
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;