import React from 'react';

import Tweet from './Tweet'
const Tweets = (props) => { // we use PROPS to pass data between components
    const tweets = [
        {name:'deved', tweet:'react ughh, I love JS'},
        {name:'traversy media', tweet:'whats up guys, How are ya ?'},
        {name:'webdevdimplified', tweet:'In uzb I will simplify the web'}
    ];
    return (
        <section>
            {tweets.map(tweet => ( // so map shows us 3 times
                <Tweet name={tweet.name} tweet={tweet.tweet} />
            ))}
        </section>
    )
};

export default Tweets;