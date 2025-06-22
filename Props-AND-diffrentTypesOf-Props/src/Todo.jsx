// Conditional Rendering and their ways
// 6 ways to use Conditional Rendaring like if,Ternary, And, Or etc

// import App from "./App";

// way-1
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

// Option-2
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

// Option-3(using Ternary Operator)
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work On"} : {task}
//     </li>
//   );
// }

// Option-4(using And Operator) //if true then execute
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ": Done"}
//     </li>
//   );
// }

// Option-5(using Or Operator) //if true then execute
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || ": Do it"}
//     </li>
//   );
// }

// Option -6

export default function Todo({ task, isDone }) {
  let listItem;

  if (isDone) {
    listItem = <li>Finised: {task}</li>;
  } else {
    listItem = <li>Work On: {task}</li>;
  }
  return listItem;
}
