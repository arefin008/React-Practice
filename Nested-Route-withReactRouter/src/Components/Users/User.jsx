import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email } = user;

  const userStyle = {
    border: "2px solid purple",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* <Link to={`/user/${id}`}>Show Details</Link> */}
      <Link to={`/user/${id}`}>
        <button> Show Details</button>
      </Link>
    </div>
  );
};

export default User;
