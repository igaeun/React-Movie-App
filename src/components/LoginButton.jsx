import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  margin-left: 40px;
`

const Msg = styled.span`
  color: white;
  margin-left: 20px;
`

const Button = styled.button`
  width: 90px;
  border-radius: 20px;
  padding: 4px 15px;
`
function LoginButton () {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginClick = () => {
    setIsLoggedIn(true)
    navigate('/login')
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      {isLoggedIn ? (
        <LogoutButtonReal onClick={handleLogoutClick} />
      ) : (
        <LoginButtonReal onClick={handleLoginClick} />
      )}
    </div>
  )
}

LoginButton.propTypes = {
  onClick: PropTypes.func
}

function LoginButtonReal (props) {
  return (
    <Wrapper>
      <Button onClick={props.onClick}>로그인</Button>
      <Msg>로그인 해주세요</Msg>
    </Wrapper>
  )
}

LoginButtonReal.propTypes = {
  onClick: PropTypes.func
}

function LogoutButtonReal (props) {
  return (
    <Wrapper>
      <Button onClick={props.onClick}>로그아웃</Button>
      <Msg>환영합니다</Msg>
    </Wrapper>
  )
}

LogoutButtonReal.propTypes = {
  onClick: PropTypes.func
}

export default LoginButton
