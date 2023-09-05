import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const CampaignIds = ({ setId, setIds, country, campaignIds }) => {
  const [id, setID] = useState('')
  return (
    <>
    {
      campaignIds
      ?
      <div className="flex w-full items-center space-x-2">
        <Badge className="whitespace-nowrap" variant="secondary">country: {country}</Badge>
        <Badge className="whitespace-nowrap" variant="secondary">campaign id: {campaignIds[country]}</Badge>
        <Badge onClick={() => setIds(null)} className="whitespace-nowrap cursor-pointer" variant="outline">Reset</Badge>
      </div>
      :
      <div className="flex w-full items-center space-x-2">
        <Input value={id} onChange={(ev) => setID(Number(ev.target.value))} type="number" placeholder="Campaign Id" />
        <Button onClick={() => setId(id)} type="submit" className="whitespace-nowrap">Save id</Button>
      </div>
    }
    </>
  )
}

export default CampaignIds