import { useState } from "react";
import { useEffect } from "react";
import Blog from "../blog/blog";

const Blogs = ({handleAddtoBookmarks}) => {

    const[blogs,setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },)

    return (
        <div className="w-2/3 space-y-5">
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>

            {
                blogs.map(blog => <Blog key={blog.id} handleAddtoBookmarks={handleAddtoBookmarks} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;