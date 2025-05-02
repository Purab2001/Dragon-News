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
            <main className='w-11/12 mx-auto my-5 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside />
                </aside>
                <section className="main col-span-6">
                    {state === "loading" ? <Loading /> : <Outlet />}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;