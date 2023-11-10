import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail () {
  const { title } = useParams()

  return (
    <div>
      <h2>{title}</h2>
      {/* 영화 상세 페이지 내용 */}
    </div>
  )
}
