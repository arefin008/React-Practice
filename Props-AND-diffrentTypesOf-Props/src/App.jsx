import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const Actors = ["Sakib", "Sariful", "Jasim", "Rubel"];
  const singers = [
    { id: 1, name: "Rafi", age: 30 },
    { id: 2, name: "Mahi", age: 38 },
    { id: 3, name: "Safi", age: 40 },
  ];
  return (
    <>
      <Person name="John" age="20"></Person>
      <Person name="Abrar" age="30"></Person>
      <Person2 name="Galib" age="30"></Person2>

      <hr />
      <hr />
      <Todo task="React" isDone={true}></Todo>
      <Todo task="JS" isDone={true}></Todo>
      <Todo task="Next" isDone={false}></Todo>
      <hr />
      <hr />
      <Actor name={"John Abrar"}></Actor>
      {/* dynamically using map  */}
      {Actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      <hr />
      <hr />
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
    </>
  );
}

export default App;

function Person(props) {
  return (
    <h2>
      This is {props.name} and {props.age} years old.
      <hr />
    </h2>
  );
}
// Using Destructure

function Person2({ name, age }) {
  return (
    <h2>
      This is {name} and {age} years old.
    </h2>
  );
}
