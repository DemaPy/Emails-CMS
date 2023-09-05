import { createContext, useState } from "react";






export const DataContext = createContext()


export const DataContextProvider = ({ children }) => {

  const [data, setData] = useState({
    links: [],
    images: [],
    text: null,
    products: null
  })

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  )
}