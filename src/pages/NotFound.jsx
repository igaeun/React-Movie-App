import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 100vh;
  margin-top: 50px;
`

const NotFoundMsg = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 15px;
`

const NotFoundSubMsg = styled.div`
  margin: 15px;
`

const ClickToMain = styled.button`
  border-style: none;
  background-color: white;
  color: red;
  font-weight: bold;
  margin-top: 0;
  margin-left: 0;
`

export default function NotFound () {
  const navigate = useNavigate()

  const returnHomeClick = () => {
    // 메인 페이지로 이동
    navigate('/')
  }

  return (
    <NotFoundWrapper>
      <NotFoundMsg>해당 페이지를 찾지 못했습니다.</NotFoundMsg>
      <NotFoundSubMsg>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</NotFoundSubMsg>
      <ClickToMain onClick={returnHomeClick}>메인 페이지로 이동</ClickToMain>
    </NotFoundWrapper>
  )
}
