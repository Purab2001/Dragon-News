import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
            return;
        } else if (id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        } else {
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
    }, [data, id])

    // Get the news items to display based on screen size and showAll state
    const displayedNews = showAll ? categoryNews : categoryNews.slice(0, 10);

    return (
        <div>
            <h2 className='font-bold text-lg mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> News Found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    displayedNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
            {categoryNews.length > 10 && !showAll && (
                <div className="text-center mt-6">
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn btn-secondary shadow-none cursor-pointer"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default CategoryNews;