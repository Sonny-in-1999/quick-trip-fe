import { styled } from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Colors from '../../colors/Colors'
import LoginInput from '../components/LoginInput'
import Button from '../components/Buttons'

export const LoginPage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 5% 0 5% 0;
`

export const LogoContainer = styled.div`
  width: 20%;
  border: 1px solid black;
  padding: 3%;
  margin-bottom: 5%;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 3%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.3);
`
const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  align-items: baseline;
`
const RadioDiv = styled.label`
  display: flex;
  flex-direction: row;
  width:20%;
  margin-right: 5%;
  align-items: center;
`
const RadioSpan = styled.span`
  color: ${Colors.font_darkgray};
`
const LoginTypeRadio = styled.input`
  margin-right: 5%;
  vertical-align: middle;
  appearance: none;
  border: max(2px, 0.1em) solid ${Colors.mainColor};
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  &:checked{
    border: 0.4em solid ${Colors.mainColor};
  }
`
const SignupLinkText = styled.span`
  font-size: 0.8rem;
  color: ${Colors.font_lightgray};
`

export default function Login(){
  const navigate = useNavigate()
  const [userType, setUserType] = useState('')
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const buttonSetting = {
    width: 62,
    bgcolor: Colors.mainColor,
    color: 'white',
    fontSize: 1,
    border: 0,
    radius: 0,
    text:'로그인',
    margin: '4% 0 4% 0',
    padding: 2
  }

  const loginInfo = {
    userType: userType,
    id: id,
    pw: pw
  }

  console.log(loginInfo)
  return(
    <LoginPage>
      <LoginContainer>
        <LogoContainer>로고</LogoContainer>
        <RadioContainer>
          <RadioDiv onClick={() => setUserType('tourist')}>
            <LoginTypeRadio type='radio' name='type' checked value='tourist'></LoginTypeRadio>
            <RadioSpan>일반 회원</RadioSpan>
          </RadioDiv>
          <RadioDiv onClick={() => setUserType('client')}>
          <LoginTypeRadio type='radio' name='type' value='client'></LoginTypeRadio>
            <RadioSpan>기업 회원</RadioSpan>
          </RadioDiv>
        </RadioContainer>
        <LoginInput role='ID' type='text' func={setId}></LoginInput>
        <LoginInput role='PW' type='password' func={setPw}></LoginInput>
        <Button setting={buttonSetting}></Button>
        <SignupLinkText onClick={() => navigate('/signup')}>아직 회원이 아니신가요?</SignupLinkText>
      </LoginContainer>
    </LoginPage>
  )
}