import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = ({ handleBookmark, handleReadingCount }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    // console.log(blogs);
    return (
        <div>
            <h1 className='text-2xl'>Total: {blogs.length}</h1>
            <div className="all-blogs grid grid-cols-2 ml-4 gap-4">
                {
                    blogs.map((blog) => {
                        return (
                            <Blog handleBookmark={handleBookmark} key={blog.id} blog={blog} handleReadingCount={handleReadingCount}></Blog>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Blogs;