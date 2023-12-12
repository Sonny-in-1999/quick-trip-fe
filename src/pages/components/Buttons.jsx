import { styled } from 'styled-components' 
import Colors from '../../colors/Colors'

const ButtonComponent = styled.button`
  width: ${props => props.width}%;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize}rem;
  border: ${props => props.border};
  border-radius: ${props => props.radius}px;
  margin: ${props => props.margin};
  padding: ${props => props.padding}%;
`

const Button = ({setting}) => {
  return <ButtonComponent
    width={setting.width}
    bgcolor={setting.bgcolor}
    color={setting.color}
    fontSize={setting.fontSize}
    border={setting.border}
    radius={setting.radius}
    margin={setting.margin}
    padding={setting.padding}
    onClick={setting.function}
  >{setting.text}</ButtonComponent>
}
export default Button