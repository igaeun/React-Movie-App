import React from 'react'
import Movie from '../components/Movie'
import { movies } from '../movieDummy'
// import MovieOverview from '../components/MovieOverview'
import styled from 'styled-components'

const MovieWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Movies () {
  const movieData = movies.results

  const movieList = movieData.map((movie, index) => (
    <Movie
      key={index}
      title={movie.title}
      posterPath={movie.poster_path}
      voteAverage={movie.vote_average}
      overview={movie.overview}
    />
  ))

  return (
    <MovieWrap>
      {movieList}
    </MovieWrap>
  )
}
