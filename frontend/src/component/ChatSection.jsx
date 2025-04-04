import React from "react";
import ChatProfile from "./chatSection/ChatProfile";
import ChatBox from "./chatSection/ChatBox";
import ChatSend from "./chatSection/ChatSend";

const ChatSection = () => {
  return (
    <div className="w-full max-sm:h-[calc(100%-80px)] h-full ">
      <div className="w-full h-20 ">
        <ChatProfile />
      </div>
      <div className="h-[calc(100%-136px)] overflow-y-scroll ">
        <ChatBox />
      </div>
      <div className="w-full h-14 ">
        <ChatSend />
      </div>
    </div>
  );
};

export default ChatSection;
