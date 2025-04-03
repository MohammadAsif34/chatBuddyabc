import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [activeState, setActiveState] = useState("contact");
  return (
    <AppContext.Provider value={{ activeState, setActiveState }}>
      {children}
    </AppContext.Provider>
  );
};
