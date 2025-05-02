import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error loading news:', error));
    }, []);

    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' speed={70} pauseOnHover={true}>
                {news.map(item => (
                    <p key={item.id} className='font-bold px-2 mx-4'>{item.title}.</p>
                ))}
            </Marquee>
        </div>
    );
};

export default LatestNews;