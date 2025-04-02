import React from "react";
import "./ChatBoxMssg.css";
import Mssg from "./mssg/Mssg";

const ChatBoxMssg = () => {
  const mssg =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis voluptates tempora, quia non reiciendis. Accusamus saepe officiis in aperiam ab laborum? Labore in ea molestias similique aspernatur! Delectus, tempora.";
  return (
    <div className="chatBoxMssg">
      <Mssg type="self" mssg="hello brother,sel Loremf" />
      <Mssg type="other" mssg={mssg} />
      <Mssg type="self" mssg={mssg} />
      <Mssg type="other" mssg="hello brother" />
      <Mssg type="self" mssg="hello brother,sel Loremf" />
      <Mssg type="other" mssg={mssg} />
      <Mssg type="self" mssg={mssg} />
      <Mssg type="other" mssg="hello brother" />
      <Mssg type="self" mssg="hello brother,sel Loremf" />
      <Mssg type="other" mssg={mssg} />
      <Mssg type="self" mssg={mssg} />
      <Mssg type="other" mssg="hello brother" />
    </div>
  );
};

export default ChatBoxMssg;
