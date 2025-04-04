import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [activeState, setActiveState] = useState("contact");
  const [mobileState, setMobileState] = useState("contactBox");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        setIsMobile,
        activeState,
        setActiveState,
        mobileState,
        setMobileState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
