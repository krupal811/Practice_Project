import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

 import './Blog.css';
import Posts from './posts/Posts';
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

const Blog = (props) => {

    return (
        <div className='Blog'>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/new_post",
                            hash: "#submit",
                            search: "?quick-submit=true"
                        }}>New Post</NavLink></li>
                        {/* <li><NavLink to='full_post'>Full Post</NavLink></li> */}
                    </ul>
                </nav>
            </header>
            {/* <Posts /> */}
            <Routes>
                <Route path='/' element={<Posts />} />
                <Route path='/new_post' element={<NewPost />} />
                <Route path='/posts/:id' element={<FullPost />} />
            </Routes>

        </div>
    );

}

export default Blog;



