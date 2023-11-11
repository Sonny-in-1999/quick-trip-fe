import { styled } from 'styled-components'
import Colors from '../../colors/Colors'
import Mainbanner from '../components/Mainbanners'

const NavbarContainer = styled.div`
    display: flex;
    width: 98%;
    padding: 1%;
    justify-content: space-around;
    align-items: center;
`
const NavbarLogoContainer = styled.div`
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
    margin: 0 20% 0 20%;
`
const LoginContainer = styled.div`
    display: flex;
    width: 10%;
    justify-content: center;
    align-items: center;
`
const LoginDiv = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin: 0 3% 0 3%;
    color: ${(props) => props.color}
`

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <div></div>
                <NavbarLogoContainer>로고</NavbarLogoContainer>
                <LoginContainer>
                    <LoginDiv color={Colors.mainColor}>Sign up</LoginDiv>
                    <LoginDiv color={Colors.font_darkgray}>Sign in</LoginDiv>
                </LoginContainer>
            </NavbarContainer>
        </>
    )
}

export default function Main() {
    return (
        <>
            <Navbar></Navbar>
            <Mainbanner></Mainbanner>
        </>
    )
}