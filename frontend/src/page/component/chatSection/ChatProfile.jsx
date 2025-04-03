import React from "react";

const ChatProfile = () => {
  return (
    <div className="w-full h-full px-5 flex justify-between items-center border-b border-gray-300 ">
      <div className="flex items-center gap-4">
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
      </div>
    </div>
  );
};

export default ChatProfile;
