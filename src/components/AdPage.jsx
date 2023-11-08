import React from 'react'
import Ad from './Ad'

export default function AdPage () {
  return (
    <div>
      <Ad shouldShowAd />
      <Ad shouldShowAd={false} />
    </div>
  )
}
