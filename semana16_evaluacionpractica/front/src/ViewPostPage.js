import React, { useEffect, useState } from "react";
import "./ViewPostPage.css";

function ViewPostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error cargando posts:", error));
  }, []);

  return (
    <div className="post-container">
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>❤️ {post.likes} Likes</p>
        </div>
      ))}
    </div>
  );
}

export default ViewPostPage;