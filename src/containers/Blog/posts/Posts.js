import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../../../Component/Post/Post'
import './Posts.css'
import { Link } from 'react-router-dom'

const Posts = (props) => {
    const [post, setPost] = useState([])
    const [selectedPostId, setSelectedPostId] = useState(null)
    console.log("=========>", props);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 5)
                const updatedPost = posts.map(auth => {
                    return {
                        ...auth,
                        author: "Krupal"
                    }
                })
                setPost(updatedPost);
                console.log("response==>", response);
            })
            .catch(error => {
                console.log("error==>", error)
            })
    }, [])


    const postClicked = (id) => {
        console.log('postClicked');
        setSelectedPostId(id)
    }

    return (
        <>
            <div className='Posts'>
                {
                    post.length > 0 ? post.map(post => {
                        return (
                            <Link to={'/posts/' + post.id} key={post.id}>
                                <Post
                                    title={post.title}
                                    author={post.author}
                                    clicked={() => postClicked(post.id)}
                                />
                            </Link>
                        );
                    })
                        : <h5>Something Went Wrong</h5>}
            </div>
        </>
    )
}

export default Posts


