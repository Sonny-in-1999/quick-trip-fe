import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Colors from '../../colors/Colors'
import LoginInput from '../components/LoginInput'
import Button from '../components/Buttons'

import { LoginPage, LoginContainer, LogoContainer } from './Login'

export default function Signup(){
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [pwCheck, setPwCheck] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const buttonSetting = {
    width: 62,
    bgcolor: Colors.mainColor,
    color: 'white',
    fontSize: 1,
    border: 0,
    radius: 0,
    text:'회원가입',
    margin: '4% 0 4% 0',
    padding: 2
  }
  const innerButtonSetting = {
    width: 20,
    bgcolor: 'white',
    color: Colors.font_darkgray,
    fontSize: 0.8,
    border: `1px solid ${Colors.font_darkgray}`,
    radius: 10,
    text:'중복 확인',
    margin: '0',
    padding: 1
  }
  const innerPhoneButtonSetting = {
    width: 20,
    bgcolor: 'white',
    color: Colors.font_darkgray,
    fontSize: 0.8,
    border: `1px solid ${Colors.font_darkgray}`,
    radius: 10,
    text:'본인 인증',
    margin: '0',
    padding: 1
  }
  return(
    <LoginPage>
      <LoginContainer>
        <LogoContainer>로고</LogoContainer>
        <LoginInput role='이름' type='text' func={setName}></LoginInput>
        <LoginInput role='ID' buttonSetting={innerButtonSetting} type='text' func={setId}></LoginInput>
        <LoginInput role='비밀번호' type='password' func={setPw}></LoginInput>
        <LoginInput role='비밀번호 확인' type='password' func={setPwCheck}></LoginInput>
        <LoginInput role='전화번호( - 제외)' type='phone' buttonSetting={innerPhoneButtonSetting} func={setPhone}></LoginInput>
        <LoginInput role='E-Mail' type='email' func={setEmail}></LoginInput>
        <Button setting={buttonSetting}></Button>
      </LoginContainer>
    </LoginPage>
  )
}