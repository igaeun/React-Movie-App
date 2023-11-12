/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LoginButton from './LoginButton'

const Logo = styled.img`
  margin: 30px;
`

const HeaderWrap = styled.div`
  height: 60px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const HeaderContainer = styled.div`
  background-color: black;
`

const Menu = styled(Link)`
  color: white;
  margin-left: 40px;
  text-decoration: none;
`

export default class Header extends PureComponent {
  render () {
    return (
      <HeaderContainer>
        <HeaderWrap>
          <Link to="/">
            <Logo
              style={{ width: '154px', height: '20px' }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>
          <Menu to="/movie">영화</Menu>
          <Menu to="/tv">TV 프로그램</Menu>
          <Menu to="/celebrity">인물</Menu>
          <LoginButton />
        </HeaderWrap>
      </HeaderContainer>
    )
  }
}
