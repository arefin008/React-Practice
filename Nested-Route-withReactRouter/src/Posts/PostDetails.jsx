import { useLoaderData } from "react-router";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { id, title, body } = postDetails;
  return (
    <div>
      <h2>Post Details: {id}</h2>
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
    </div>
  );
};

export default PostDetails;
