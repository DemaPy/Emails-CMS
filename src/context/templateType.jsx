import { createContext, useState } from "react";






export const TemplateContext = createContext()

export const TemplateContextProvider = ({ children }) => {

  const [templateType, setTemplateType] = useState("newsletter")

  return (
    <TemplateContext.Provider value={[templateType, setTemplateType]}>
      {children}
    </TemplateContext.Provider>
  )
}