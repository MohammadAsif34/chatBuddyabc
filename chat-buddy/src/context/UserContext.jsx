import { createContext, useRef, useState } from "react";

export const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [user, setUser] = useState(null);
  const userRef = useRef("user");
  // const currChatRef = useRef("user");
  const [currChat, setCurrChat] = useState(null);
  return (
    <userContext.Provider
      value={{
        client,
        setClient,
        user,
        setUser,
        userRef,
        currChat,
        setCurrChat,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
