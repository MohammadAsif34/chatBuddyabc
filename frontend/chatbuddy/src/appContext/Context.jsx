import { createContext, useState } from "react";

export const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isProfile, setIsProfile] = useState(false);
  const [activeSection, setActiveSection] = useState("contact");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  return (
    <appContext.Provider
      value={{
        isProfile,
        setIsProfile,
        activeSection,
        setActiveSection,
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
