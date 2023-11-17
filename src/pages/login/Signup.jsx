import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Colors from '../../colors/Colors'
import LoginInput from '../components/LoginInput'
import Button from '../components/Buttons'
import MemberData from '../../dummydata/MemberData'

import { LoginPage, LoginContainer, LogoContainer, RadioContainer, RadioDiv, RadioSpan, LoginTypeRadio} from './Login'

export default function Signup(){
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [pwCheck, setPwCheck] = useState('')
  const [nickName, setNickName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [userType, setUserType] = useState('')
  const [errorCode, setErrorCode] = useState(999)
  const [validCheckMessage, setValidCheckMessage] = useState('')
  const memberList = MemberData.list

  const signupInfo = {
    userType: userType,
    name: name,
    id: id,
    pw: pw,
    nickName: nickName,
    phone: phone,
    email: email
  }

  console.log(memberList)

  const idDuplicationCheck = () => {
    if(memberList.filter(el => el.id === id).length > 0){
      setErrorCode(1)
      setValidCheckMessage('다른 회원님이 사용하고 있는 아이디입니다.')
    } else{
      setErrorCode(0)
      alert('사용 가능한 아이디입니다.')
    }
  }

  const isValidPassword = (password) => {
    if (password.length < 8) {
      return false;
    }
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    return hasLetter && hasNumber && hasSpecialChar;
  }

  const validCheck = () => {
    if(!isValidPassword(pw)){
      setErrorCode(2)
      setValidCheckMessage('비밀번호는 문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.')
    } else if(pw !== pwCheck){
      setErrorCode(3)
      setValidCheckMessage('비밀번호가 다릅니다')
    }else {
      setErrorCode(0)
      setValidCheckMessage('')
    }
  }
  const signup = async() => {
    // axios
    // .post(`url/${userType === 'tourist' ? 'tourist' : 'client'}`, signupInfo)
    // .then(navigate('/login'))
    try{
      await validCheck()

      console.log(errorCode)
      if(errorCode === 0){
        alert('회원가입')
        navigate('/login')
      }
    } catch(error){
      console.log(error)
    }
  }

  const buttonSetting = {
    width: 62,
    bgcolor: Colors.mainColor,
    color: 'white',
    fontSize: 1,
    border: 0,
    radius: 0,
    text:'회원가입',
    margin: '4% 0 4% 0',
    padding: 2,
    function: signup
  }
  const innerIdButtonSetting = {
    width: 20,
    bgcolor: 'white',
    color: Colors.font_darkgray,
    fontSize: 0.8,
    border: `1px solid ${Colors.font_darkgray}`,
    radius: 10,
    text:'중복 확인',
    margin: '0',
    padding: 1,
    function: idDuplicationCheck
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
        <LoginInput role='이름' type='text' func={setName}></LoginInput>
        <LoginInput role='ID' buttonSetting={innerIdButtonSetting} type='text' func={setId} validCheck={errorCode === 1 ? validCheckMessage : ''}></LoginInput>
        <LoginInput role='비밀번호' type='password' func={setPw} validCheck={errorCode === 2 ? validCheckMessage : ''}></LoginInput>
        <LoginInput role='비밀번호 확인' type='password' func={setPwCheck} validCheck={errorCode === 3 ? validCheckMessage : ''}></LoginInput>
        <LoginInput role='닉네임' type='text' func={setNickName}></LoginInput>
        <LoginInput role='전화번호( - 제외)' type='phone' buttonSetting={innerPhoneButtonSetting} func={setPhone}></LoginInput>
        <LoginInput role='E-Mail' type='email' func={setEmail}></LoginInput>
        <Button setting={buttonSetting}></Button>
      </LoginContainer>
    </LoginPage>
  )
}