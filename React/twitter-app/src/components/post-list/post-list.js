import React from 'react';

import './post-list.css'
// Our programm will each post
import PostListItem from '../post-list-item';
const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label='Going to learn React'/>
            <PostListItem label='Do my homework'/>
            <PostListItem label='I love coding'/>
        </ul>
    )
}

export default PostList;
