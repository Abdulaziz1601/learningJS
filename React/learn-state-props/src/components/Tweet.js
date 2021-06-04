import React from 'react';

const Tweet = (props) => ( // we use PROPS to pass data between components
    <div>
        <h1>{props.name}</h1>
        
        <h1>{props.tweet}</h1>
    </div>
);

export default Tweet;