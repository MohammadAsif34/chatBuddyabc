import React, { useContext, useEffect, useState } from "react";
import SidebarSection from "../component/SidebarSection";
import ContactSection from "../component/ContactSection";
import ActiveSection from "../component/ActiveSection";
import ChatSection from "../component/ChatSection";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { isMobile, setIsMobile, mobileState, setMobileState } =
    useContext(AppContext);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="w-[100vw] h-[100vh] p-4 bg-[#34f7c4] flex  ">
        {/* sidebar  section*/}
        {(true || !isMobile) && (
          <div className="w-[80px] h-full max-sm:w-full max-sm:h-[80px] max-sm:fixed max-sm:left-0 max-sm:bottom-0 max-sm:z-10 p-2 bg-[#06d6a0] border border-gray-400 sm:rounded-l-xl">
            <SidebarSection />
          </div>
        )}

        {/* contact section  */}
        {(mobileState === "contactBox" || !isMobile) && (
          <div className="w-[400px]  h-full bg-[#f6f6f9] p-4 border border-gray-400">
            {/* <ContactSection /> */}
            <ActiveSection />
          </div>
        )}

        {/* chat section  */}
        {(mobileState === "chatBox" || !isMobile) && (
          <div className="flex-1 h-full bg-white border border-gray-300 max-sm:rounded-xl rounded-r-xl box-border">
            <ChatSection />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
