import React, { use, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Link } from "react-router";
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('User logged out successfully');
            })
            .catch((error) => {
                console.error('Error logging out:', error);
            });
    }

    const isHomeActive = location.pathname === '/' || location.pathname === '/category/0';

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <HiMenuAlt1 size={24} />
                    </button>
                </div>
                <div className="hidden lg:block">{user && user.email}</div>
            </div>

            <div className={`navbar-center ${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-80 lg:top-0 left-0 right-0 bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}>
                <ul className="menu menu-vertical lg:menu-horizontal px-1 text-accent">
                    <li><NavLink to='/' className={({ isActive }) => isActive || isHomeActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/career'>Career</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className='login-btn flex items-center gap-2'>
                    {user && user.photoURL ? (
                        <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full" />
                    ) : (
                        <FaUserCircle size={40} className='text-primary' />
                    )}
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