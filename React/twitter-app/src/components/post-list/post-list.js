import React from 'react';

import './post-list.css'
// Our programm will each post
import PostListItem from '../post-list-item';
const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}

export default PostList;
