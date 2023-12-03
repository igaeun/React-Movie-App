import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/'

const MovieContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 200px;
  height: 300px;
`

const MovieDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  margin-left: 15px;
  
`

const MovieDetailTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const MovieDetailOverview = styled.div`
  width: 500px;
  font-size: 15px;
  margin-top: 10px;
`

const MovieDetailVoteAverage = styled.div`
  font-size: 12px;
  margin-top: 10px;
`

export default function MovieDetail () {
  // url로 넘겨 받은 title
  const { title } = useParams()

  // 네비게이트 Hook을 통해 페이지 이동 시에 넘겨 받은 정보
  // 이미지, 별점 등의 모든 정보들
  const { state } = useLocation()

  console.log(title)
  console.log(state)

  if (!state) {
    // state가 없는 경우에 대한 처리
    return <p>정보 전달되지 않음</p>
  }

  const { posterPath, voteAverage, overview } = state

  return (
    <MovieContainerWrapper>
      <Img src={IMG_BASE_URL + posterPath} alt='포스터' />
      <MovieDetailWrapper>
        <MovieDetailTitle>{title}</MovieDetailTitle>
        {/* 영화 상세 페이지 내용 */}
        <MovieDetailOverview>Overview: {overview}</MovieDetailOverview>
        <MovieDetailVoteAverage>Vote Average: {voteAverage}</MovieDetailVoteAverage>
      </MovieDetailWrapper>
    </MovieContainerWrapper>
  )
}
