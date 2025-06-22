import React from 'react';
import Post from "@/components/Post";

interface FeedProps {
}

const Feed = (props: FeedProps) => {
    return (
        <div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Feed;