import React from "react";
import { FaPlus } from "react-icons/fa";

const CreateNotes = ({ openModal }) => {
  return (
    <>
      <div
        className="absolute right-5 bottom-5 w-[65px] h-[65px] bg-[#16008B] text-white rounded-full flex justify-center items-center"
        onClick={openModal}
      >
        <FaPlus className="text-3xl " />
      </div>
    </>
  );
};

export default CreateNotes;
