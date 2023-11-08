import React from 'react'
import ad from '../img/UMCAdImage.svg' // 이미지 불러오기
import styled from 'styled-components'

const AdImg = styled.img `
  width: 100%;
`

// eslint-disable-next-line react/prop-types
const Ad = ({ showAd }) => {
  // false인 경우 null 반환
  if (!showAd) {
    return null
  }

  // true인 경우 이미지 출력
  return (
    <div>
      <AdImg src={ad} alt="ad" />
    </div>
  )
}

export default Ad
