import React, { useEffect, useState } from 'react';
import Post from "../Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => response.json())
      .then(data => {
        if (data) setPosts(data);
      })
      .catch(error => {
        console.error("Failed to fetch posts:", error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 ? (
        posts.map(post => <Post key={post._id} {...post} />)
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}
