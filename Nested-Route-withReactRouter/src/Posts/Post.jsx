import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const postStyle = {
    border: "2px solid purple",
    padding: "5px",
    borderRadius: "20px",
  };

  return (
    <div style={postStyle}>
      <h2>Title: {title}</h2>
      <p>{body}</p>

      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
