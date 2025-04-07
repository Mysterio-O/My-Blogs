import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleBookmark}) => {
    // console.log(props);
    // const blog = props.blog;
    // console.log(blog.cover);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <div className="author flex justify-around items-center">
                        <h3 className='text-lg font-bold'>{blog.author}</h3>
                        <img className='w-16' src={ blog.author_img} alt="" />
                        <button onClick={()=>handleBookmark(blog)}><FaBookmark size={25}/></button>

                    </div>
                    <div className='flex justify-around bg-gray-400 p-2'>
                        {
                            blog.hashtags.map((hash)=>{
                                // console.log(hash);
                                return (
                                    <p>{hash}</p>
                                )
                            })
                        }
                    </div>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;