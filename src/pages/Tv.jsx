import React from 'react'
import Media from '../components/Media'
import { tvPrograms } from '../tvDummy'
import styled from 'styled-components'

const TvWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function TV () {
  const tvData = tvPrograms.results

  const tvList = tvData.map((tv, index) => (
    <Media
      key={index}
      title={tv.name}
      posterPath={tv.poster_path}
      voteAverage={tv.vote_average}
      overview={tv.overview}
    />
  ))

  return (
    <TvWrap>
      {tvList}
    </TvWrap>
  )
}
