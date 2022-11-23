import axios from 'axios';
import React, { useState } from 'react';
import './NewPost.css';
const NewPost = () => {

    const [title, setTitle] = useState([])
    const [content, setContent] = useState([])
    const [author, setAuthor] = useState('krupal')

    const handleClick = () => {
        const data = {
            title: title,
            body: content,
            author: author,
        }
        axios.post("https://jsonplaceholder.typicode.com/posts/", data)
            .then(result => {
                console.log('result==>', result);
                // alert(`your title is ${title}, content is ${content}, and author is ${author}`)
            })
            .catch(error => {
                console.log("error==>", error);
            })
    }

    return (

        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Title</label>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)} />
            <label>Content</label>
            <textarea
                rows="4"
                value={content}
                onChange={(event) => setContent(event.target.value)} />
            <label>Author</label>
            <select
                value={author}
                onChange={(event) => setAuthor(event.target.value)}>
                <option value="Krupal">Krupal</option>
                <option value="Ram">Ram</option>
            </select>
            <button onClick={handleClick}>Add Post</button>
        </div>
    );

}

export default NewPost;
