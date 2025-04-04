import React, { lazy } from "react";

const ContactProfile = lazy(() => import("./ContactProfile"));

const ContactList = () => {
  return (
    <div className="w-full h-full border border-gray-300 rounded-md ">
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
      <ContactProfile />
    </div>
  );
};

export default ContactList;
