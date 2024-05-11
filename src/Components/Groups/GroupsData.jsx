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
        <div className="w-96 sm:w-auto md:w-auto">
          {!!groups.length && (
            <div className="flex flex-col items-center gap-3 pt-7 overflow-y-auto h-[459px] scrollbar-hide scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {groups.map((name, index) => (
                <div
                  className={`bg-[${name.color}] text-white text-2xl font-semibold rounded-full h-[50px] w-[50px] p-2 `}
                  key={index}
                  onClick={() => {
                    setselectedGroup(name);
                    handleScreen();
                  }}
                >
                  {getInitials(name.name)}
                  <p>{}</p>
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
