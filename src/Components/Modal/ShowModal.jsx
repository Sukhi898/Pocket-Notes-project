import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const ShowModal = ({
  closeModal,
  setColor,
  handleCreate,
  setcurrentGroup,
  currentGroup,
}) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setColor(color);
    setSelectedColor(color);
  };

  return (
    <div className="bg-white h-[200px] w-[290px] flex flex-col gap-4 relative p-4 sm:w-[480px]">
      <MdClose onClick={closeModal} className="absolute right-3 top-3" />
      <p className="font-semibold text-sm sm:text-xl">Create New group</p>
      <div className="flex gap-5">
        <p className="font-semibold text-sm sm:text-lg">Group Name</p>
        <input
          type="text"
          className="border border-solid rounded-2xl pl-2 text-xs sm:w-72"
          placeholder="Enter group name"
          value={currentGroup}
          onChange={(e) => setcurrentGroup(e.target.value)}
        />
      </div>
      <div className="flex">
        <p className="font-semibold text-sm sm:text-lg">Choose Color</p>
        <ul className="flex gap-1 pl-8 sm:gap-4">
          {[
            "#B38BFA",
            "#FF79F2",
            "#43E6FC",
            "#F19576",
            "#0047FF",
            "#6691FF",
          ].map((color, index) => (
            <li
              key={index}
              className={`sm:w-[28px] sm:h-[28px] w-[20px] h-[20px] bg-[${color}] rounded-full border-2 ${
                selectedColor === color
                  ? "border-green-600"
                  : "hover:border-green-600"
              }`}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>{" "}
      </div>

      <div className="">
        <button
          className="bg-[#16008B] text-white p-1 rounded w-24 text-sm sm:absolute sm:right-7 sm:bottom-5 absolute right-[33%] bottom-7 justify-center items-center sm:text-sm "
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ShowModal;

// import { MdClose } from "react-icons/md";

// const ShowModal = ({
//   closeModal,
//   setColor,
//   handleCreate,
//   setcurrentGroup,
//   currentGroup,
// }) => {
//   return (
//     <div className="bg-white h-[200px] w-[290px] flex flex-col gap-4 relative p-4 sm:w-[480px]">
//       <MdClose onClick={closeModal} className="absolute right-3 top-3" />
//       <p className="font-semibold text-sm sm:text-xl">Create New group</p>
//       <div className="flex gap-5">
//         <p className="font-semibold text-sm sm:text-lg">Group Name</p>
//         <input
//           type="text"
//           className="border border-solid rounded-2xl pl-2 text-xs sm:w-72"
//           placeholder="Enter group name"
//           value={currentGroup}
//           onChange={(e) => setcurrentGroup(e.target.value)}
//         />
//       </div>
//       <div className="flex">
//         <p className="font-semibold text-sm sm:text-lg">Choose Color</p>
//         <ul className="flex gap-1 pl-8 sm:gap-4">
//           <li
//             className="sm:w-[28px] sm:h-[28px] w-[20px] h-[20px] bg-[#B38BFA] rounded-full hover:border-2 border-green-600"
//             onClick={() => setColor("#B38BFA")}
//           ></li>
//           <li
//             className="sm:w-[28px] sm:h-[28px] w-[20px] h-[20px] bg-[#FF79F2] rounded-full hover:border-2 border-green-600"
//             onClick={() => setColor("#FF79F2")}
//           ></li>
//           <li
//             className="sm:w-[28px] sm:h-[28px] w-[20px] h-[20px] bg-[#43E6FC] rounded-full hover:border-2 border-green-600"
//             onClick={() => setColor("#43E6FC")}
//           ></li>
//           <li
//             className="sm:w-[28px] sm:h-[28px] w-[20px] h-[20px] bg-[#F19576] rounded-full hover:border-2 border-green-600"
//             onClick={() => setColor("#F19576")}
//           ></li>
//           <li
//             className="sm:w-[28px] sm:h-[28px] w-[20px] h-[20px] bg-[#0047FF] rounded-full hover:border-2 border-green-600"
//             onClick={() => setColor("#0047FF")}
//           ></li>
//           <li
//             className="sm:w-[28px] sm:h-[28px] w-[20px] h-[20px] bg-[#6691FF] rounded-full hover:border-2 border-green-600"
//             onClick={() => setColor("#6691FF")}
//           ></li>
//         </ul>{" "}
//       </div>

//       <div className="">
//         <button
//           className="bg-[#16008B] text-white p-1 rounded w-24 text-sm sm:absolute sm:right-7 sm:bottom-5 absolute right-[33%] bottom-7 justify-center items-center sm:text-sm "
//           onClick={handleCreate}
//         >
//           Create
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShowModal;
// import React, { useState } from "react";
// import { MdClose } from "react-icons/md";

// const ShowModal = ({
//   closeModal,
//   setColor,
//   handleCreate,
//   setcurrentGroup,
//   currentGroup,
// }) => {
//   const [selectedColor, setSelectedColor] = useState("");

//   const handleColorClick = (color) => {
//     setColor(color);
//     setSelectedColor(color);
//   };

//   return (
//     <div className="bg-white h-[200px] w-[290px] flex flex-col gap-4 relative p-4 sm:w-[480px]">
//       <MdClose onClick={closeModal} className="absolute right-3 top-3" />
//       <p className="font-semibold text-sm sm:text-xl">Create New group</p>
//       <div className="flex gap-5">
//         <p className="font-semibold text-sm sm:text-lg">Group Name</p>
//         <input
//           type="text"
//           className="border border-solid rounded-2xl pl-2 text-xs sm:w-72"
//           placeholder="Enter group name"
//           value={currentGroup}
//           onChange={(e) => setcurrentGroup(e.target.value)}
//         />
//       </div>
//       <div className="flex">
//         <p className="font-semibold text-sm sm:text-lg">Choose Color</p>
//         <ul className="flex gap-1 pl-8 sm:gap-4">
//           {[
//             "#B38BFA",
//             "#FF79F2",
//             "#43E6FC",
//             "#F19576",
//             "#0047FF",
//             "#6691FF",
//           ].map((color, index) => (
//             <li
//               key={index}
//               className={`sm:w-[28px] sm:h-[28px] w-[20px] h-[20px] bg-[${color}] rounded-full border-2 ${
//                 selectedColor === color
//                   ? "border-green-600"
//                   : "hover:border-green-600"
//               }`}
//               onClick={() => handleColorClick(color)}
//             ></li>
//           ))}
//         </ul>
//       </div>

//       <div className="">
//         <button
//           className="bg-[#16008B] text-white p-1 rounded w-24 text-sm sm:absolute sm:right-7 sm:bottom-5 absolute right-[33%] bottom-7 justify-center items-center sm:text-sm "
//           onClick={handleCreate}
//         >
//           Create
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShowModal;
