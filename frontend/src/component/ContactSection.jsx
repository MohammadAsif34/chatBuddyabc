import React, { lazy, useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ContactProfile from "./contactSection/ContactProfile";

const ContactList = lazy(() => import("./contactSection/ContactList"));

const ContactSection = () => {
  const { activeState } = useContext(AppContext);
  return (
    <div className="w-full h-full flex flex-col transition-all duration-500">
      <div className=" w-full h-10 mt-2 flex items-center text-gray-500 text-lg border border-gray-400 rounded-md ">
        <span className="bi bi-search px-3"></span>
        <input
          type="text"
          className="w-full h-full outline-0 "
          placeholder="Search"
        />
      </div>
      <p className="font-semibold text-gray-400 my-2 xl:my-4">
        Contacts
        {/* Contacts {`  W${width}  H${height}`} */}
        <span className="bi bi-plus px-2 py-1 rounded-sm text-gray-500 bg-[#34f7c4] float-end"></span>
      </p>
      <div className="flex-1 overflow-y-scroll custom-scrollbar">
        <ContactList />
      </div>
    </div>
  );
};

export default ContactSection;
