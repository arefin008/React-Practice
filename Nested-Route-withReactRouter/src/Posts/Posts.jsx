import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  const postsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  };

  return (
    <div>
      <h2>Total Posts: {posts.length}</h2>
      <div style={postsStyle}>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
