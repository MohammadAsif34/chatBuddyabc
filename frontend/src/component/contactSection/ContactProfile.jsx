import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ContactProfile = () => {
  const { setMobileState } = useContext(AppContext);
  return (
    <div
      className="w-full h-20 px-2 bg-gray-100 border-b-2 border-gray-300 flex items-center gap-3"
      onClick={() => {
        setMobileState("chatBox");
      }}
    >
      <div className="w-[55px] h-[55px] aspect-square border rounded-full cursor-pointer overflow-hidden">
        <img className="w-full h-full object-cover" src="/default_avatar.png" />
        <span className="bi bi-dot"></span>
      </div>
      <div className="flex-1 relative">
        <span className="absolute right-1 px-2 py-0 text-sm  text-red-500 bg-red-100 border rounded-sm">
          222
        </span>
        <p className=" text-xl">name</p>
        <p className="max-w-[250px] text-sm text-gray-500 truncate">
          last message
        </p>
      </div>
    </div>
  );
};

export default ContactProfile;
