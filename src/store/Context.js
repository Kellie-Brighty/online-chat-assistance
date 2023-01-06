import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalChats, setGlobalChats] = useState([]);

  return (
    <GlobalContext.Provider value={{ globalChats, setGlobalChats }}>
      {children}
    </GlobalContext.Provider>
  );
};
