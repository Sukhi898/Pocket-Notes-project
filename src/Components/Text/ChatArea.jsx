import React from "react";
import SavedNotes from "./SavedNotes";
import { MdSend } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

const ChatArea = ({
  getInitials,
  selectedGroup,
  setNotes,
  Notes,
  handleSaveNote,
  groups,
  goBack,
}) => {
  const findNote = groups?.find((item) => item.name === selectedGroup.name);

  const handleArrowClick = (event) => {
    event.preventDefault();
    console.log("Arrow clicked");
    goBack();
  };

  return (
    <>
      <div className="w-full h-screen bg-[#DAE5F5] flex flex-col relative sm:w-[80%] overflow-hidden">
        <div
          className={`h-20 w-full bg-[#001F8B] font-semibold text-white flex text-center relative items-center gap-3 float-left`}
        >
          <div>
            <FaArrowLeft
              onClick={handleArrowClick}
              className="block sm:hidden"
            />
          </div>
          <div>
            {selectedGroup && (
              <span
                className={`text-3xl text-white h-[45px] w-[45px] bg-[${selectedGroup.color}] rounded-full flex justify-center items-center`}
              >
                {selectedGroup ? getInitials(selectedGroup.name) : ""}
              </span>
            )}
          </div>
          <div>
            <p className="text-s sm:text-xl">{selectedGroup.name}</p>
          </div>
        </div>
        <div className="overflow-y-auto h-[464px] flex flex-col gap-2">
          {!!findNote?.notes?.length &&
            findNote.notes.map((item, index) => (
              <SavedNotes key={index} Notes={item} />
            ))}
        </div>
        <div
          className={`relative h-40 w-full bg-[#001F8B] mt-auto p-2 flex justify-center place-items-center`}
        >
          <textarea
            type="text"
            placeholder="Enter your text here........"
            value={Notes}
            onChange={(e) => setNotes(e.target.value)}
            className="h-auto max-h-28 w-[97%] rounded-lg pl-9 pr-9  p-2 pb-20 resize-none overflow-hidden whitespace-pre-wrap"
          />

          <div className="absolute bottom-9 right-9 flex items-center">
            {Notes.trim().length ? (
              <MdSend className={"text-blue-950"} onClick={handleSaveNote} />
            ) : (
              <MdSend className={"text-zinc-400"} onClick={handleSaveNote} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
