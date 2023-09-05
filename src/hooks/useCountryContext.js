import { useContext } from "react"
import { CountryContext } from "../context/country"








export const useCountryContext = () => {
  const context = useContext(CountryContext)

  if (!context) {
    throw new Error("You are probably use context outside of probider")
  }

  return context
}