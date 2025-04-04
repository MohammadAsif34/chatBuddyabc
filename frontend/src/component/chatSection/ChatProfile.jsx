import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ChatProfile = () => {
  const { isMobile, setMobileState } = useContext(AppContext);
  return (
    <div className="w-full h-full px-5 flex justify-between items-center border-b border-gray-300 ">
      <div className="flex items-center gap-4">
        {isMobile && (
          <span
            className="px-3 py-2 rounded-md bg-[#34f7c4]"
            onClick={() => {
              setMobileState("contactBox");
            }}
          >
            <i className="bi bi-arrow-left"></i>
          </span>
        )}
        <img
          src="default_avatar.png"
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div>
          <p className="text-xl">Name</p>
          <p className="text-sm text-gray-400">online</p>
        </div>
      </div>
      <div>
        {!isMobile ? (
          <ul className="flex gap-8 text-gray-400 text-xl">
            <li>
              <span className="bi bi-search"></span>
            </li>
            <li>
              <span className="bi bi-telephone"></span>
            </li>
            <li>
              <span className="bi bi-camera-video"></span>
            </li>
            <li>
              <span className="bi bi-info-circle"></span>
            </li>
            <li>
              <span className="bi bi-three-dots-vertical"></span>
            </li>
          </ul>
        ) : (
          <span className="bi bi-three-dots-vertical"></span>
        )}
      </div>
    </div>
  );
};

export default ChatProfile;
