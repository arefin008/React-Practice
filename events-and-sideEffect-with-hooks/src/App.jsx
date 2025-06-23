import "./App.css";
import Counter from "./Counter/Counter";
import SignUp from "./PreventDefault/SignUp";
import ToolBar from "./ToolBar/ToolBar";
import HandleEvents from "./TypesOfEvents/HandleEvents";
import Users from "./UseEffect/Users";

function App() {
  return (
    <>
      <ToolBar></ToolBar>
      <SignUp></SignUp>
      <HandleEvents></HandleEvents>
      <Counter></Counter>
      <Users></Users>
    </>
  );
}

export default App;
