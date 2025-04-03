import React, { lazy, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import ContactProfile from "./contactSection/ContactProfile";

const ContactList = lazy(() => import("./contactSection/ContactList"));

const ContactSection = () => {
  const { activeState } = useContext(AppContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full h-full flex flex-col transition-all duration-500">
      <div className=" w-full h-10 my-4 flex items-center text-gray-500 text-lg border border-gray-400 rounded-md ">
        <span className="bi bi-search px-3"></span>
        <input
          type="text"
          className="w-full h-full outline-0 "
          placeholder="Search"
        />
      </div>
      <p className="font-semibold text-gray-400">
        Contacts {`  W${width}  H${height}`}
        <span className="bi bi-plus px-2 py-1 rounded-sm bg-[#34f7c4] float-end"></span>
      </p>
      <div className="flex-1 my-4 overflow-y-scroll custom-scrollbar">
        <ContactList />
      </div>
    </div>
  );
};

export default ContactSection;
