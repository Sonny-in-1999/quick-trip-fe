import { styled } from 'styled-components' 
import { useState } from 'react'
import Colors from '../../colors/Colors'
import Button from './Buttons'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 1% 0 1% 0;
`
const InputDiv = styled.div`
  display: flex;
  width: 60%;
  padding:1%;
  border-bottom: 1px solid ${Colors.mainColor};
  margin: 4% 0 1% 0;
  justify-content: space-between;
`
const InfoInput = styled.input`
  width: 70%;
  outline: 0px;
  border: 0;
`
const ValidCheckText = styled.span`
  width: 60%;
  color: red;
  font-size: 0.8rem;
`
export default function LoginInput({role, type, buttonSetting, validCheck, func}){
  const inputData = (e) => {
    func(e.target.value)
  }
  return(
    <InputContainer>
      <InputDiv>
        <InfoInput placeholder={role} type={type} onChange={inputData}></InfoInput>
        {buttonSetting ? <Button setting={buttonSetting} /> : ''}
      </InputDiv>
      <ValidCheckText>{validCheck ? validCheck : ''}</ValidCheckText>
    </InputContainer>
    
  )
}