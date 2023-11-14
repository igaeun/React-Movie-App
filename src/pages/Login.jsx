import React, { useState } from 'react'
import styled from 'styled-components'

const LoginPageWrapper = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const LoginTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`
const FormWrapper = styled.div`
  margin-top: 20px;
`

const FormTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

const EmailInputContainer = styled.input`
  width: 500px;
  height: 25px;
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  border-color: #cfcfcf;
`

const ErrorMsg = styled.div`
  margin-top: 7px;
  color: red;
  font-size: 12px;
`

const PasswordInputContainer = styled.input`
    width: 500px;
    height: 25px;
    border-style: solid;
    border-radius: 5px;
    border-width: 2px;
    border-color: #cfcfcf;
`

const SubmitButton = styled.button`
  margin-top: 12px;
  width: 500px;
  height: 35px;
  border-radius: 20px;
  border: none;
  background-color: #bebebe;
  color: white;
  font-weight: bold;
`

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(email)
    setEmailError(isValid ? '' : '올바른 이메일을 입력해주세요.')
    return isValid
  }

  const validatePassword = () => {
    const isValid = password.length >= 8
    setPasswordError(isValid ? '' : '비밀번호는 8자 이상이어야 합니다.')
    return isValid
  }

  return (
    <LoginPageWrapper>
      <ContentWrapper>
        <LoginTitle>
        이메일과 비밀번호를 입력해주세요
        </LoginTitle>
        {/* 이메일 주소 */}
        <FormWrapper>
          <FormTitle>
            이메일 주소
          </FormTitle>
          <EmailInputContainer
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          <ErrorMsg>
            {emailError}
          </ErrorMsg>
        </FormWrapper>
        {/* 비밀번호 */}
        <FormWrapper>
          <FormTitle>
            비밀번호
          </FormTitle>
          <PasswordInputContainer
            type="password"
            velue={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          <ErrorMsg>
            {passwordError}
          </ErrorMsg>
        </FormWrapper>
        <SubmitButton>
        확인
        </SubmitButton>
      </ContentWrapper>
    </LoginPageWrapper>
  )
}
