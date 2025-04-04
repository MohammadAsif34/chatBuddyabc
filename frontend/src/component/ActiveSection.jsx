import React, { lazy, useContext } from "react";
import { AppContext } from "../context/AppContext";
const ContactSection = lazy(() => import("./ContactSection"));
const MyProfile = lazy(() => import("./myProfile/MyProfile"));
const Setting = lazy(() => import("./setting/Setting"));

const ActiveSection = () => {
  const { activeState } = useContext(AppContext);
  return (
    <div className=" w-full h-full  flex flex-col">
      <p className="mb-2 text-2xl font-bold ">ZAP</p>
      <div className="flex-1   overflow-y-auto custom-scrollbar">
        {activeState === "contact" && <ContactSection />}
        {activeState === "profile" && <MyProfile />}
        {activeState === "setting" && <Setting />}
      </div>
    </div>
  );
};

export default ActiveSection;
