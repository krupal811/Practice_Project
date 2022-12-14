import React from 'react';
import './Post.css';

const post = (props) => (

    <div className="Post" onClick={props.clicked}>
        <h4>{props.title}</h4>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </div>
);

export default post;