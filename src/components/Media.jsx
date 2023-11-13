/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/'
// Styled-Components

const GlobalStyle = createGlobalStyle`
    body{
        background-color: rgb(3, 0, 34);
    }
`

const MediaContainer = styled.div `
    width: 200px;
    background-color: rgba(15, 0, 102, 0.658);
    color: white;
    font-size: 12px;
    margin: 7px;
    border-radius: 15px;
`

const MediaContainerImg = styled.img `
    width: 200px;
    height: 300px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

const MediaInfo = styled.div `
    display: flex;
    padding: 10px;
    justify-content: space-between;
    color: white;
    font-size: 12px;
`

const MediaOverview = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.658);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 10px;
    display: none;
`

const MediaOverviewTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
`

const MediaOverviewContent = styled.div`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  line-height: 1.5;
`

const MediaContainerWrapper = styled.div`
    width: 200px;
    background-color: rgba(15, 0, 102, 0.658);
    color: white;
    font-size: 12px;
    margin: 7px;
    border-radius: 15px;
    position: relative;
    &:hover ${MediaOverview} {
        display: block;
    }
`

export default function Media ({ title, name, posterPath, voteAverage, overview, mediaType }) {
  const navigate = useNavigate()

  const onClickImg = () => {
    const path = mediaType === 'movie' ? `/movie/${title}` : `tv/${name}`
    // 상세 페이지로 이동 및 정보 전달
    console.log('Navigating to:', path)
    navigate(path, {
      state: { title, name, posterPath, voteAverage, overview } // 넘기고자 하는 정보들
    })
  }

  return (
    <Link to={mediaType === 'movie' ? `/movie/${title}` : `/tv/${name}`} onClick={onClickImg}>
      <MediaContainerWrapper>
        <GlobalStyle />
        <MediaContainer>
          {/* 포스터 이미지 */}
          <MediaContainerImg src={IMG_BASE_URL + posterPath} alt={title || name} onClick={onClickImg} />
          {/* 프로그램 상세 설명 */}
          <MediaOverview>
            {/* 프로그램 상세 설명 > 제목 */}
            <MediaOverviewTitle>{title || name}</MediaOverviewTitle>
            {/* 프로그램 상세 설명 > 설명 */}
            <MediaOverviewContent>{overview}</MediaOverviewContent>
          </MediaOverview>
          <MediaInfo>
            {/* 프로그램 제목 */}
            <div id={`${mediaType}-title`}>{title || name}</div>
            {/* 프로그램 평점 */}
            <div>{voteAverage}</div>
          </MediaInfo>
        </MediaContainer>
      </MediaContainerWrapper>
    </Link>
  )
}

Media.PropTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  mediaType: PropTypes.oneOf(['movie', 'tv'].isRequired)
}
