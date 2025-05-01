import React from 'react';
import { FaEye } from 'react-icons/fa';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from 'react-router';

const NewsCard = ({news}) => {
    const { id, title, author, image_url, details, total_view, rating } = news || {};
    
    return (
        <div className="border border-base-300 mb-6">
            {/* Card Header with Author Info */}
            <div className="flex justify-between items-center p-4 bg-base-200 mb-5">
                <div className="flex items-center gap-3">
                    {author?.img && (
                        <img 
                            src={author.img} 
                            alt={author?.name || "Author"} 
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    )}
                    <div>
                        <h4 className="font-semibold">{author?.name || "Unknown Author"}</h4>
                        <p className="text-xs text-accent">
                            {author?.published_date 
                                ? new Date(author.published_date).toLocaleDateString() 
                                : ""}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <CiBookmark size={20} className="text-accent cursor-pointer" />
                    <CiShare2 size={20} className="text-accent cursor-pointer" />
                </div>
            </div>

            {/* Card Content */}
            <div className="px-4 pb-4">
                <h2 className="text-lg font-bold mb-3">{title}</h2>
                
                {image_url && (
                    <figure className="mb-4">
                        <img src={image_url} alt={title} className="w-full rounded-lg" />
                    </figure>
                )}

                <div>
                    <p className="text-accent">
                        {details?.length > 200 
                            ? `${details.slice(0, 200)}...` 
                            : details}
                    </p>
                    
                    {details?.length > 200 && (
                        <Link to={`/news/${id}`} className="text-secondary font-semibold inline-block mt-2">
                            Read More
                        </Link>
                    )}
                </div>

                {/* Card Footer */}
                <div className="flex justify-between items-center mt-5 pt-4 border-t border-base-300">
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="text-warning">
                                ★
                            </span>
                        ))}
                        <span className="ml-1">{rating?.number || 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{total_view || 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;