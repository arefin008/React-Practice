//****************** / Type-1 *************
// export default function HandleEvents() {
//   function handleClick() {
//     alert("Button 1 Clicked.");
//   }
//   return (
//     <>
//       <button onClick={handleClick}>Click Me1</button>
//     </>
//   );
// }

//******************  Type-2  *************
// export default function HandleEvents() {
//   const handleClick = () => {
//     alert("Button 2 Clicked.");
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }

//******************  Type-3  *************
// export default function HandleEvents() {
//   return (
//     <>
//       <button
//         style={{ marginTop: "10px" }}
//         onClick={() => alert("Button 3 Clicked")}
//       >
//         Click Me
//       </button>
//     </>
//   );
// }

//******************  Type-4 (handler with props)  *************
export default function HandleEvents() {
  const addToThree = (num) => {
    alert(num + 3);
  };
  return (
    <>
      <button style={{ marginTop: "10px" }} onClick={() => addToThree(5)}>
        Click Me
      </button>
    </>
  );
}
