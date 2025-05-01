import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { title, image_url, author, details, tags } = news || {};
    const published_date = author?.published_date;

    return (
        <div className="border border-base-300 rounded overflow-hidden p-6 space-y-5">
            {/* Featured Image */}
            <div className='flex justify-center items-center'>
                {image_url && (
                    <img
                        src={image_url}
                        alt={title}
                        className="w-full object-cover"
                    />
                )}
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-primary">
                {title}
            </h1>

            {/* Publication Date and Tags */}
            <div className="text-sm text-gray-600">
                {published_date && (
                    <span>
                        {new Date(published_date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                )}

                {tags?.length > 0 && (
                    <>
                        <span> | Tag Cloud Tags: </span>
                        {tags.map((tag, index) => (
                            <span key={index} className="mr-1">
                                {tag}{index < tags.length - 1 ? ',' : ''}
                            </span>
                        ))}
                    </>
                )}
            </div>

            {/* Article Content */}
            <div className="text-accent leading-relaxed">
                <p>{details}</p>
            </div>

            {/* Back Button */}
            <Link
                to="/category/0"
                className="btn btn-secondary shadow-none cursor-pointer"
            >
                <FaArrowLeft /> All news in this category
            </Link>
        </div>
    );
};

export default NewsDetailsCard;