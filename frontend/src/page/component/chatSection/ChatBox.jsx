import React from "react";
import Mssg from "./Mssg";

const ChatBox = () => {
  return (
    <div className="w-full h-full px-3 py-2 ">
      <Mssg type={"first"} />
      <Mssg />
      <Mssg />
      <Mssg />
      <Mssg />
      <Mssg />
      <Mssg />
      <Mssg />
      <Mssg />
      <Mssg />
    </div>
  );
};

export default ChatBox;
