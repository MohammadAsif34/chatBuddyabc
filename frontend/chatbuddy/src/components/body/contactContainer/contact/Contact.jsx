import React, { useContext } from "react";
import "./Contact.css";
import { appContext } from "../../../../appContext/Context";

const Contact = () => {
  const { setActiveSection } = useContext(appContext);
  return (
    <div className="contactItem" onClick={() => setActiveSection("chat")}>
      <div className="contactAvatar">
        <img src="default_avatar.png" alt="" />
      </div>
      <div className="contactDetails">
        <div className="contactName">
          <p className="c-name">name</p>
          <span className="c-status">online</span>
        </div>
        <div className="contactMssg">
          <p className="c-lastMssg">last_ message</p>
          <span className="c-unread">965</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
