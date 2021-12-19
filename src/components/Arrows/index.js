import React from "react";

const Arrows = ({ align }) => {
  const renderList = () => {
    if (align === "left") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 21"
          width="28"
          height="28"
        >
          <path
            d="M11.5 14.5l-4-4 4-4"
            fill="none"
            stroke="#FFF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    } else if (align === "right") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 21"
          width="28"
          height="28"
        >
          <path
            d="M9.5 14.5l4-4-4-4"
            fill="none"
            stroke="#FFF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    }
  };
  return <>{renderList()}</>;
};

export default Arrows;

// export const LeftArrow = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 21 21"
//       width="28"
//       height="28"
//     >
//       <path
//         d="M11.5 14.5l-4-4 4-4"
//         fill="none"
//         stroke="#FFF"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//   );
// };

// export const RightArrow = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 21 21"
//       width="28"
//       height="28"
//     >
//       <path
//         d="M9.5 14.5l4-4-4-4"
//         fill="none"
//         stroke="#FFF"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//   );
// };
