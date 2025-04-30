import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div>
            CategoryNews
        </div>
    );
};

export default CategoryNews;