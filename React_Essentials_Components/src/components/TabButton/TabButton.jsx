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
function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
