import React from "react";
import ChatProfile from "./chatSection/ChatProfile";
import ChatBox from "./chatSection/ChatBox";
import ChatSend from "./chatSection/ChatSend";

const ChatSection = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full h-20 ">
        <ChatProfile />
      </div>
      <div className="flex-1 overflow-y-scroll ">
        <ChatBox />
      </div>
      <div className="w-full h-14 ">
        <ChatSend />
      </div>
    </div>
  );
};

export default ChatSection;
