import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

class LoginControl extends Component {
  constructor (props) {
    super(props)
    // this.state 활용해서 isLoggedIn 의 값으로 상태 관리 하기
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false })
  }

  // 렌더링 메서드
  render () {
    const isLoggedIn = this.state.isLoggedIn

    return (
      <div>
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    )
  }
}

LoginControl.propTypes = {
  onClick: PropTypes.func
}

function LoginButton (props) {
  return (
    <Wrapper>
      <Button onClick={props.onClick}>로그인</Button>
      <Msg>로그인 해주세요</Msg>
    </Wrapper>
  )
}

LoginButton.propTypes = {
  onClick: PropTypes.func
}

function LogoutButton (props) {
  return (
    <Wrapper>
      <Button onClick={props.onClick}>로그아웃</Button>
      <Msg>환영합니다</Msg>
    </Wrapper>
  )
}

LogoutButton.propTypes = {
  onClick: PropTypes.func
}

export default LoginControl
