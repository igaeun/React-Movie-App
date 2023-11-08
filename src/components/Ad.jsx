import React from 'react'
import ad from '../img/UMCAdImage.svg' // 이미지 불러오기
import styled from 'styled-components'

const AdImg = styled.img `
  width: 100%;
`

export default function Ad (props) {
  // eslint-disable-next-line react/prop-types
  const { shouldShowAd } = props

  return (
    <div>
      {shouldShowAd ? (
        <div>
          {/* 광고 컨텐츠.jsx */}
          <AdImg src={ad} alt="ad" />
        </div>
      ) : (
        <div>
          {/* 광고 표시X.jsx */}
        </div>
      )}
    </div>
  )
}
