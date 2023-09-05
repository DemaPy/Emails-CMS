import { createContext, useState } from "react";






export const CampaignIdsContext = createContext()


export const CampaignIdsContextProvider = ({ children }) => {

  const [campaignIds, setIds] = useState(null);

  return (
    <CampaignIdsContext.Provider value={[campaignIds, setIds]}>
      {children}
    </CampaignIdsContext.Provider>
  )
}