import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  const users = useLoaderData();

  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  };

  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <div style={userStyle}>
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
