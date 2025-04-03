import React, { useEffect, useState } from "react";
import SidebarSection from "./component/SidebarSection";
import ContactSection from "./component/ContactSection";
import ActiveSection from "./component/ActiveSection";
import ChatSection from "./component/ChatSection";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);
    window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="w-[100vw] h-[100vh] p-4 bg-[#34f7c4] flex  ">
        {/* sidebar  section*/}
        <div className="w-[80px]  h-full  bg-[#06d6a0] p-2 border border-gray-300 rounded-l-xl  box-border">
          <SidebarSection />
        </div>
        {/* contact section  */}
        <div className="w-[400px]  h-full bg-[#f6f6f9] p-4 border border-gray-300  box-border">
          {/* <ContactSection /> */}
          <ActiveSection />
        </div>
        {/* chat section  */}
        {true && (
          <div className="flex-1 h-full bg-white border border-gray-300 rounded-r-xl box-border">
            <ChatSection />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
