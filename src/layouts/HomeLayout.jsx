import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigate();
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
            <main className='w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-12 gap-5'>
                <aside className='md:col-span-3 md:sticky md:top-0 md:h-fit order-2 md:order-1'>
                    <LeftAside />
                </aside>
                <section className="main md:col-span-6 order-1 md:order-2">
                    {state === "loading" ? <Loading /> : <Outlet />}
                </section>
                <aside className='md:col-span-3 md:sticky md:top-0 md:h-fit order-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;