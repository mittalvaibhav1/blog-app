import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[blogs , setBlogs] = useState([]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => {
            return blog.id !== id;
        });
        setBlogs(newBlogs);
    };
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.log(error.message));
    }, []);
    return ( 
        <div className="home">
            <BlogList blogs = {blogs}  title="All Blogs!" handleDelete = {handleDelete} />
        </div>
    );
}

export default Home;