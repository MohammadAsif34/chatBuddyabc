import React from "react";
import "./chatBoxInput.css";

const ChatBoxInput = () => {
  return (
    <div className="chatBoxInput">
      <div className="chatBoxInputAttach">
        <i className="bi bi-emoji-smile"></i>
        <i className="bi bi-paperclip"></i>
      </div>
      <div className="chatBoxInputMssg">
        <input type="text" />
        <button>
          <i className="bi bi-send"></i>
        </button>
      </div>
    </div>
  );
};

export default ChatBoxInput;
