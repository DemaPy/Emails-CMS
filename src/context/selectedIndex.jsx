import { createContext, useState } from "react";






export const SelectedIndexContext = createContext()


export const SelectedIndexContextProvider = ({ children }) => {

  const [idx, setIdx] = useState({ id: null, type: null });

  return (
    <SelectedIndexContext.Provider value={[idx, setIdx]}>
      {children}
    </SelectedIndexContext.Provider>
  )
}