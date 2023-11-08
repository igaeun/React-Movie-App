/* eslint-disable react/prop-types */
import React from 'react'

export default function MovieOverview ({ title, overview }) {
  return (
  // 영화 상세 설명 페이지
    <div className='movie-overview-page'>
      {/* 영화 제목 */}
      <div id='movie-title'>{title}</div>
      {/* 영화 상세 설명 */}
      <div id='movie-overview'>{overview}</div>
    </div>
  )
}
