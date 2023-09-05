import { SelectedIndexContext } from "../context/selectedIndex"
import { useContext } from "react"




export const useSelectedIndexContext = () => {
  const context = useContext(SelectedIndexContext)

  if (!context) {
    throw new Error("You are probably use context outside of probider")
  }

  return context
}