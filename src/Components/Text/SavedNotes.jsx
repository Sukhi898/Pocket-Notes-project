import React from "react";
import moment from "moment";
import { GoDotFill } from "react-icons/go";

const Note = ({ Notes }) => {
  return (
    <div className="max-w-full bg-white shadow-lg p-4 m-3 rounded">
      <div className="h-20 overflow-hidden">
        <div className="p-2 overflow-ellipsis whitespace-pre-wrap break-words">
          {Notes}
        </div>
      </div>
      <div className="flex items-center justify-end mt-2 text-xs font-medium text-gray-700">
        <div className="flex items-center">
          <GoDotFill className="mr-1" />
          <span>{moment().format("Do MMMM YYYY h:mm:ss A")}</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
