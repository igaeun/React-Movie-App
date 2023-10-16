import React from 'react'
import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

// Styled-Components

const MovieContainer = styled.div `
    width: 200px;
    background-color: rgba(15, 0, 102, 0.658);
    color: white;
    font-size: 12px;
    margin: 7px;
    border-radius: 15px;
`;

const MovieContainerImg = styled.img `
    width: 200px;
    height: 300px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

const MovieInfo = styled.div `
    display: flex;
    padding: 10px;
    justify-content: space-between;
`;

export default function Movie({ title, poster_path, vote_average, overview }) {
  return (
    <MovieContainer>
         {/* 포스터 이미지 */}
            <MovieContainerImg src={IMG_BASE_URL + poster_path} alt='포스터'/>
        <MovieInfo>
            {/* 영화 제목 */}
            <div id='movie-title'>{title}</div>
            {/* 영화 평점 */}
            <div>{vote_average}</div>
            {/* 영화 상세 설명 */}
            <div id='movie-overview'>{overview}</div>
        </MovieInfo>
    </MovieContainer>
  )
}
