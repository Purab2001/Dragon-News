import React, { use } from 'react';
import { NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { Link } from "react-router";
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('User logged out successfully');
            })
            .catch((error) => {
                console.error('Error logging out:', error);
            });
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div>{user && user.email}</div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-accent">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/career'>Career</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className='login-btn flex items-center gap-2'>
                    <img src={userIcon} alt="user" className="w-10 h-10" />
                    {
                        user ?
                            (<button onClick={handleLogout} className='btn btn-primary shadow-none px-10'>Logout</button>)
                            :
                            (<Link to="/auth/login" className='btn btn-primary shadow-none px-10'>Login</Link>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;