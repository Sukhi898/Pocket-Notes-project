const GroupsData = ({
  getInitials,
  groupname,
  groups,
  setselectedGroup,
  selectedGroup,
  sethideGroupsforSm,
}) => {
  console.log(groupname);
  console.log(selectedGroup);

  const handleScreen = () => {
    sethideGroupsforSm("hidden");
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="w-96 sm:w-full md:w-auto">
          {!!groups.length && (
            <div className="flex flex-col pl-16 gap-4 pt-7 overflow-x-auto sm:overflow-y-auto sm:h-auto h-[459px] scrollbar-hide scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
              {groups.map((name, index) => (
                <div
                  className={`relative ${
                    selectedGroup === name ? "bg-[#dcdcdc] rounded-xl " : ""
                  }`}
                  key={index}
                  onClick={() => {
                    setselectedGroup(name);
                    handleScreen();
                  }}
                >
                  <div
                    className={`bg-[${name.color}] text-white text-2xl font-semibold rounded-full h-[50px] w-[50px] p-2 flex`}
                  >
                    {getInitials(name.name)}
                    <p className="text-black ml-12 h-7 w-full text-[16px] text-start font-medium whitespace-nowrap">
                      {name.name.charAt(0).toUpperCase() + name.name.slice(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GroupsData;
