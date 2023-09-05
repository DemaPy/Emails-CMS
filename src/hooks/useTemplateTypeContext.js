import { useContext } from "react"
import { TemplateContext } from "../context/templateType"








export const useTemplateTypeContext = () => {
  const context = useContext(TemplateContext)

  if (!context) {
    throw new Error("You are probably use context outside of probider")
  }

  return context
}