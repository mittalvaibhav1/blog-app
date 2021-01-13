import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => {
            return blog.id !== id;
        });
        setBlogs(newBlogs);
    };
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((res) => {
                if(!res.ok) {
                    throw Error('Could not fetch Data');
                }
                return res.json();
            })
            .then((data) => {
                setError(null);
                setBlogs(data);
                setIsPending(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
            });
    }, []);
    return ( 
        <div className="home">
            {error && <div> { error } </div>}
            {isPending && <div>Loading..</div>}
            {blogs && <BlogList blogs = {blogs}  title="All Blogs!" handleDelete = {handleDelete} /> }
        </div>
    );
}

export default Home;