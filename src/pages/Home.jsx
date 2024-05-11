import React, { useState, useEffect } from "react";
import { IoMdLock } from "react-icons/io";
import ShowModal from "../Components/Modal/ShowModal";
import GroupsData from "../Components/Groups/GroupsData";
import ChatArea from "../Components/Text/ChatArea";
import CreateNotes from "../Components/Modal/CreateNotes";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [Notes, setNotes] = useState("");
  const [groupname, setGroupname] = useState([]);
  const [color, setColor] = useState("#6691FF");
  const [showGroup, setShowGroup] = useState(false);
  const [showChatbox, setshowChatbox] = useState(false);
  const [groups, setgroups] = useState(() => {
    return JSON.parse(localStorage.getItem("groups")) || [];
  });
  const [selectedGroup, setselectedGroup] = useState();
  const [currentGroup, setcurrentGroup] = useState();

  const [hideGroupsforSm, sethideGroupsforSm] = useState("");

  const handleCreate = () => {
    if (currentGroup) {
      setgroups((prev) => [
        ...prev,
        { name: currentGroup, notes: [], color: color },
      ]);
      setcurrentGroup("");
      closeModal();
      setshowChatbox(true);
    }
  };

  const handleSaveNote = () => {
    if (Notes && selectedGroup) {
      const updatedGroups = groups.map((item) => {
        if (item.name === selectedGroup.name) {
          return {
            ...item,
            notes: [...item.notes, Notes],
          };
        }
        return item;
      });
      setgroups(updatedGroups);
      setNotes("");
    }
  };

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    const data = localStorage.getItem("groups");
    const resData = JSON.parse(data);
    if (resData) {
      setgroups(resData);
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getInitials = (groupName) => {
    if (typeof groupName !== "string") {
      return "";
    }
    const words = groupName.split(" ");
    const initials = words.map((word) => word.charAt(0));
    return initials.join("");
  };

  const goBack = () => {
    if (window.innerWidth <= 640) {
      window.location.href = "";
    } else {
      window.history.back();
    }
  };

  return (
    <>
      <div className="flex relative  w-full h-screen font-body">
        <div
          className={` ${hideGroupsforSm} min-w-[25%] text-center pt-10 relative flex gap-5 flex-col items-center overflow-x-hidden  sm:block  md:w-auto`}
        >
          <p className="text-2xl font-medium ">Pocket Notes</p>
          <GroupsData
            showGroup={showGroup}
            setColor={setColor}
            color={color}
            groupname={groupname}
            setshowChatbox={setshowChatbox}
            getInitials={getInitials}
            groups={groups}
            setgroups={setgroups}
            setselectedGroup={setselectedGroup}
            selectedGroup={selectedGroup}
            sethideGroupsforSm={sethideGroupsforSm}
          />
          <CreateNotes openModal={openModal} />
        </div>

        {selectedGroup ? (
          <ChatArea
            color={color}
            showGroup={showGroup}
            groupname={groupname}
            getInitials={getInitials}
            groups={groups}
            Notes={Notes}
            setNotes={setNotes}
            handleSaveNote={handleSaveNote}
            selectedGroup={selectedGroup}
            sethideGroupsforSm={sethideGroupsforSm}
            goBack={goBack}
          />
        ) : (
          <div className=" h-screen   lg:w-[75%] bg-[#DAE5F5] flex flex-col text-center justify-center place-items-center relative overflow-hidden md:w-[75%] ">
            <div className="pb-12 absolute ">
              <img
                src="Mainimage.png"
                alt="Mainpic"
                className="w-[350px] h-[200px] items-center"
              />
              <div className="w-[350px] h-[64px]">
                <p className="text-3xl font-bold">Pocket Notes</p>
                <p className="text-xs font-semibold">
                  Send and receive messages without keeping your phone online.
                  Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </p>
              </div>
            </div>
            <span className="absolute bottom-4 flex items-center text-[12px] font-medium">
              <IoMdLock />
              end-to-end encrypted
            </span>
          </div>
        )}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="relative sm:max-w-lg">
              <div className="fixed inset-0 bg-black opacity-50"></div>{" "}
              <ShowModal
                closeModal={closeModal}
                setShowGroup={setShowGroup}
                setshowChatbox={setshowChatbox}
                setGroupname={setGroupname}
                groups={groups}
                setColor={setColor}
                setgroups={groups}
                handleCreate={handleCreate}
                currentGroup={currentGroup}
                setcurrentGroup={setcurrentGroup}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
