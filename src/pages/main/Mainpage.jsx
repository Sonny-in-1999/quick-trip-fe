import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Colors from '../../colors/Colors'
import Mainbanner from '../components/Mainbanners'
import MenuNavigator from '../components/MenuNavigator';
import Thumbnails from '../components/Thumbnails';
import MainRecommendData from '../../dummydata/MainRecommendData';
import MainRecommend from '../components/MainRecommend';

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
    color: ${(props) => props.color};
`
const Navbar = () => {
    const navigate = useNavigate()
    const login = () =>{
        navigate('/login')
    }
    return (
        <>
            <NavbarContainer>
                <div></div>
                <NavbarLogoContainer>로고</NavbarLogoContainer>
                <LoginContainer>
                    <LoginDiv color={Colors.mainColor}>Sign up</LoginDiv>
                    <LoginDiv color={Colors.font_darkgray} onClick={login}>Sign in</LoginDiv>
                </LoginContainer>
            </NavbarContainer>
        </>
    )
}


export default function Main() {
    const placeData = MainRecommendData.list
    return (
        <>
            <Navbar></Navbar>
            <Mainbanner></Mainbanner>
            <MenuNavigator></MenuNavigator>
            <MainRecommend></MainRecommend>
            {placeData.map(el => <Thumbnails place={el}></Thumbnails>)}
            
        </>
    )
}