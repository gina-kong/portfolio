import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext();

export function VisibilityProvider({ children }) {
  const [visibility, setVisibility] = useState({
    Explorer: false,
    Notepad: false,
  });

  function openComponent(component) {
    setVisibility((prev) => ({
      ...prev,
      [component]: true,
    }));
  }

  function closeComponent(component) {
    setVisibility((prev) => ({
      ...prev,
      [component]: false,
    }));
  }

  return (
    <VisibilityContext.Provider value={{ visibility, openComponent, closeComponent }}>
      {children}
    </VisibilityContext.Provider>
  );
}

export const useVisibility = () => useContext(VisibilityContext);