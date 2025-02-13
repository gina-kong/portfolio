import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext();

export function VisibilityProvider({ children }) {
  const [visibility, setVisibility] = useState({
    Explorer: false,
    Notepad: false,
  });

  // Ordered list of component windows to track z-index
  // Focused windows are pushed to the end of the array (i.e. highest index)
  const [zIndexList, setZIndexList] = useState([])

  /**
   * Open a component to make it visible and assign it the highest z-index so it
   * appears at the front. If the component is already open, focus it by reordering
   * the z-index list.
   * @param {*} component 
   */
  function openComponent(component) {
    if (zIndexList.includes(component)) {
      focusComponent(component);
    } else {
      setZIndexList(() => {
        const newList = [...zIndexList];
        newList.push(component);
        console.log(newList)
        return newList;
      })
    }
    
    setVisibility((prev) => ({
      ...prev,
      [component]: true,
    }));
  }

  /**
   * Close a component and remove it from the z-index list.
   * @param {*} component 
   */
  function closeComponent(component) {
    setVisibility((prev) => ({
      ...prev,
      [component]: false,
    }));
    
    setZIndexList(() => {
      const newList = removeFromZIndexList(component);
      console.log(newList);
      return newList;
    });
  }

  /**
   * Focus the component by removing it from the z-index list before pushing
   * the component to the end of the array so it has the highest index.
   * @param {*} component 
   */
  const focusComponent = (component) => {
    setZIndexList(() => {
      const newList = removeFromZIndexList(component);
      newList.push(component);
      console.log(newList);
      return newList;
    })
  }

  /**
   * Return a new list with the passed component removed.
   * @param {*} component 
   * @returns updated z-index list
   */
  const removeFromZIndexList = (component) => {
    const newList = [...zIndexList];
    newList.splice(newList.indexOf(component), 1);
    return newList;
  }

  return (
    <VisibilityContext.Provider value={{
      visibility,
      openComponent,
      closeComponent,
      focusComponent,
      getZIndex: (component) => zIndexList.indexOf(component) || 0
    }}>
      {children}
    </VisibilityContext.Provider>
  );
}

export const useVisibility = () => useContext(VisibilityContext);