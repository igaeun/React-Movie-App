/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/'
// Styled-Components

const GlobalStyle = createGlobalStyle`
    body{
        background-color: rgb(3, 0, 34);
    }
`

const MovieContainer = styled.div `
    width: 200px;
    background-color: rgba(15, 0, 102, 0.658);
    color: white;
    font-size: 12px;
    margin: 7px;
    border-radius: 15px;
`

const MovieContainerImg = styled.img `
    width: 200px;
    height: 300px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

const MovieInfo = styled.div `
    display: flex;
    padding: 10px;
    justify-content: space-between;
    color: white;
    font-size: 12px;
`

const MovieOverview = styled.div`
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

const MovieOverviewTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
`

const MovieOverviewContent = styled.div`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  line-height: 1.5;
`

const MovieContainerWrapper = styled.div`
    width: 200px;
    background-color: rgba(15, 0, 102, 0.658);
    color: white;
    font-size: 12px;
    margin: 7px;
    border-radius: 15px;
    position: relative;
    &:hover ${MovieOverview} {
        display: block;
    }
`

export default function Movie ({ title, posterPath, voteAverage, overview }) {
  return (
    <MovieContainerWrapper>
      <GlobalStyle />
      <MovieContainer>
        {/* 포스터 이미지 */}
        <MovieContainerImg src={IMG_BASE_URL + posterPath} alt='포스터'/>
        {/* 영화 상세 설명 */}
        <MovieOverview>
          {/* 영화 상세 설명 > 제목 */}
          <MovieOverviewTitle>{title}</MovieOverviewTitle>
          {/* 영화 상세 설명 > 설명 */}
          <MovieOverviewContent>{overview}</MovieOverviewContent>
        </MovieOverview>
        <MovieInfo>
          {/* 영화 제목 */}
          <div id='movie-title'>{title}</div>
          {/* 영화 평점 */}
          <div>{voteAverage}</div>
        </MovieInfo>
      </MovieContainer>
    </MovieContainerWrapper>
  )
}

Movie.PropTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
}
