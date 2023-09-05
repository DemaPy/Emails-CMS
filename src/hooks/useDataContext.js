import { useContext } from "react"
import { DataContext } from "../context/links"








export const useDataContext = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error("You are probably use context outside of probider")
  }

  return context
}