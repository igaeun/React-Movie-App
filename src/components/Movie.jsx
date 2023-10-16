import React from 'react'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export default function Movie({ title, poster_path, vote_average, overview }) {
  return (
    <div className='movie-container'>
      {/* 포스터 이미지 */}
      <img src={IMG_BASE_URL + poster_path} alt='포스터' />
      <div className='movie-info'>
        {/* 영화 제목 */}
        <div id='movie-title'>{title}</div>
        {/* 영화 평점 */}
        <div>{vote_average}</div>
        {/* 영화 상세 설명 */}
        <div id='movie-overview'>{overview}</div>
      </div>
    </div>
  )
}
