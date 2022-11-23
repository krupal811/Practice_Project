import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './FullPost.css';

const FullPost = (props) => {
    console.log("props.id===>", props.id);
    const [loadedPost, setLoadedPost] = useState(null)

    console.log("!loadedPost", !loadedPost);

    // useEffect(() => {
    if (props.id) {
        if (!loadedPost || (loadedPost && loadedPost.id !== props.id)) {
            console.log("loadedPost==>", loadedPost);
            axios.get('https://jsonplaceholder.typicode.com/posts/' + props.id)
                .then(response => {
                    console.log("response--FullPost==>", response.data);
                    setLoadedPost(response.data);
                }).catch(err => {
                    console.log("err==>", err);
                })
        }
    }
    // }, [])



    const handleDelete = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + props.id).then(result => {
            console.log("resulttt===>", result);
            // alert("deleted")
        });

    }
    let post = <p>Please select a Post!</p>;
    if (props.id) {
        post = <p>Loading....!</p>;
    }
    if (loadedPost) {
        console.log("object");
        post = (
            <div className="FullPost">
                <h1>{loadedPost.title}</h1>
                <p>{loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={() => handleDelete()}>Delete</button>
                </div>
            </div>
        );
    }
    console.log(loadedPost);
    return post;

}

export default FullPost;


