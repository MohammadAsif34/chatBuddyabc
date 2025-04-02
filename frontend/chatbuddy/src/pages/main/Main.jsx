import React, { useState, useEffect, useContext } from "react";
import "./Main.css";

import ContactsList from "../../components/body/contactContainer/contactList/ContactList.jsx";
import ChatBox from "../../components/body/chatContainer/chatBox/ChatBox.jsx";
import { appContext } from "../../appContext/Context.jsx";
import Profile from "../../components/body/profile/Profile.jsx";

const Main = () => {
  const {
    isProfile,
    setIsProfile,
    activeSection,
    setActiveSection,
    isMobile,
    setIsMobile,
  } = useContext(appContext);

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="headerContainer">
        header <br />
        <br />
        <button onClick={() => setActiveSection("contact")}>get back </button>
      </div>
      <div className="bodyContainer">
        {/* Contact Section */}
        {(activeSection === "contact" || !isMobile) && (
          <div className="contactContainer">
            <ContactsList />
          </div>
        )}

        {/* Chat Section */}
        {(activeSection === "chat" || !isMobile) && (
          <div className="chatContainer">
            <ChatBox />
          </div>
        )}

        {/* Profile Section */}
        {isProfile && (activeSection === "profile" || !isMobile) && (
          <div className="profileContainer">
            <Profile />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
