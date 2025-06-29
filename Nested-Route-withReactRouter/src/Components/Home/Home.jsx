import { Outlet } from "react-router";
import Header from "./../Header/Header";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <p>This is Home Page</p>
      <hr />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
