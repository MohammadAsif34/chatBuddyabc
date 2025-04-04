import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SidebarSection = () => {
  const { activeState, setActiveState } = useContext(AppContext);
  const { isMobile } = useContext(AppContext);
  return (
    <div className="w-full h-full max-sm:px-3 flex flex-col max-sm:flex-row justify-between">
      <div className=" ">
        {!isMobile && (
          <div className="w-full aspect-square flex justify-center items-center text-3xl">
            <span className=" bi bi-gitlab"></span>
          </div>
        )}
        <ul className="sm:py-3 flex flex-col max-sm:flex-row  gap-3 max-sm:gap-x-6 text-gray-800 ">
          <li className=" flex items-center justify-center text-2xl ">
            <span
              onClick={() => setActiveState("profile")}
              title="Profile"
              className="bi bi-person px-3 py-2 rounded-full hover:bg-gray-100  cursor-pointer"
            ></span>
          </li>
          <li className=" flex items-center justify-center text-2xl ">
            <span
              onClick={() => setActiveState("contact")}
              title="Contact"
              className="bi bi-chat-right-text px-3 py-2 rounded-full hover:bg-gray-100  cursor-pointer"
            ></span>
          </li>
          {/* <li className=" flex items-center justify-center text-2xl ">
            <span
              // onClick={() => setActiveState("contact")}
              title="undefined"
              className="bi bi-journal-text px-3 py-2 rounded-full hover:bg-gray-100  cursor-pointer"
            ></span>
          </li> */}
          <li className=" flex items-center justify-center text-2xl ">
            <span
              onClick={() => setActiveState("save")}
              title="Save"
              className="bi bi-substack px-3 py-2 rounded-full hover:bg-gray-100  cursor-pointer"
            ></span>
          </li>
          <li className=" flex items-center justify-center text-2xl ">
            <span
              onClick={() => setActiveState("setting")}
              title="Setting"
              className="bi bi-gear px-3 py-2 rounded-full hover:bg-gray-100  cursor-pointer"
            ></span>
          </li>
        </ul>
      </div>
      <div className="w-full h-fit flex flex-col items-center">
        {!isMobile && (
          <div className="my-2 flex items-center justify-center text-2xl ">
            <span className="bi bi-moon px-3 py-2 rounded-full hover:bg-gray-100  cursor-pointer"></span>
          </div>
        )}
        <div className="w-[50px] h-[50px] aspect-square border rounded-full cursor-pointer overflow-hidden">
          <img
            className="w- h-full object-cover"
            src="/default_avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
