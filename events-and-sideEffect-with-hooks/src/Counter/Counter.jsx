import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  //   const handleReduce = () => {
  //     const newCount = count - 1;
  //     setCount(newCount);
  //   };

  //***********  Easier Version ********* */
  //   const handleReduce = () => {
  //     setCount(count - 1);
  //   };

  //***********  Using Arrow Function ********* */
  const handleReduce = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div style={{ border: "2px solid yellow", marginTop: "10px" }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleReduce}>-</button>
      <button style={{ marginLeft: "10px" }} onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
