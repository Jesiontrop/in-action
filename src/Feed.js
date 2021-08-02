import React, { useEffect, useState } from "react";
import "./Feed.scss";
import Post from "./Post";
import ObjectBox from "./ObjectBox";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("date", "desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()));
        });
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <ObjectBox />
            {posts.map((post) => (
                <Post
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                />
            ))}
        </div>
    );
}

export default Feed;