const User = ({ user }) => {
  const { name, username, email } = user;
  return (
    <div className="box">
      <h4>Name: {name}</h4>
      <h4>UserName: {username}</h4>
      <h4>Email: {email}</h4>
    </div>
  );
};

export default User;
