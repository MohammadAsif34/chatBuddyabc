import React from "react";
import "./ContactList.css";
import Contact from "../contact/Contact";

const ContactList = () => {
  return (
    <div className="contactList">
      {/* <p>contact</p> */}
      <div className="searchContact">
        <i className="bi bi-search"></i>
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className="contactListItem">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <>
            <Contact />
          </>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
