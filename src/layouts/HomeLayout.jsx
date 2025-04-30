import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-5'>
                    <LatestNews />
                </section>
                <nav className='w-11/12 mx-auto my-5'>
                    <Navbar />
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-5 grid grid-cols-12'>
                <aside className='col-span-3 mr-6'>
                    <LeftAside />
                </aside>
                <section className="main col-span-6 mr-6">
                    <Outlet />
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;