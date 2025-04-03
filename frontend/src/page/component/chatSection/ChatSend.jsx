import React from "react";

const ChatSend = () => {
  return (
    <div className="w-full h-full border-t px-5 py-2 border-gray-300 flex items-center gap-3">
      <div className="">
        <span className="bi bi-three-dots text-xl px-2 py-1 rounded-md hover:bg-gray-200"></span>
      </div>
      <div>
        <span className="bi bi-emoji-smile text-xl px-2 py-1 rounded-md hover:bg-gray-200"></span>
      </div>
      <div className=" flex-1 h-full border border-gray-300 rounded-sm">
        <input
          type="text"
          className="w-full h-full px-2 outline-0"
          placeholder="Text here"
        />
      </div>
      <div>
        <span className="bi bi-mic text-xl px-2 py-1 rounded-md hover:bg-gray-200"></span>
      </div>
      <div>
        <span className="bi bi-send text-xl px-3 py-2 rounded-md bg-gray-300"></span>
      </div>
    </div>
  );
};

export default ChatSend;
