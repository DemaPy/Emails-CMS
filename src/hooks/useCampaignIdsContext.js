import { useContext } from "react"
import { CampaignIdsContext } from "../context/campaignIds"




export const useCampaignIdsContext = () => {
  const context = useContext(CampaignIdsContext)

  if (!context) {
    throw new Error("You are probably use context outside of probider")
  }

  return context
}