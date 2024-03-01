import React from "react";

// function TabButton({ children }) {
//   function handleClick() {
//     console.log("Hello World!!");
//   }
//   return (
//     <li>
//       <button onClick={handleClick}>{children}</button>
//     </li>
//   );
// }
function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
