import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title,
            body,
            author
        }
        setIsPending(true);
        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: { "Content-Type" : "application/json"},
        })
        .then(() => {
            setIsPending(false);
        })
        .catch(err => {
            console.log(err.message);
            // history.go(1); // go 1 step ahead
            // history.go(-1); // go 1 step back
            history.push('/');
        })

    }

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    value={title}
                    type="text" 
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select 
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding...</button> }
            </form>
        </div>
    );
}

export default Create;