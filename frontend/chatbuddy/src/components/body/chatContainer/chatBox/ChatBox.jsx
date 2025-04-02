import React from "react";
import ChatBoxProfile from "../chatBoxProfile/ChatBoxProfile";
import ChatBoxMssg from "../chatBoxMssg/ChatBoxMssg";
import ChatBoxInput from "../chatBoxInput/ChatBoxInput";

const ChatBox = () => {
  return (
    <div>
      <ChatBoxProfile />
      <ChatBoxMssg />
      <ChatBoxInput />
    </div>
  );
};

export default ChatBox;
