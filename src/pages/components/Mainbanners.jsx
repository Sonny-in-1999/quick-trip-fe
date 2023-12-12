import { styled } from 'styled-components' 
import { useState } from 'react'
import MainBannerData from '../../dummydata/MainBannerData'

const BannerContainer = styled.div`
    margin: 2% 0%;
    position: relative;
    display: flex;
    width: 90%;
    height: 300px;
    justify-content: center;
    align-items: center;
`
const BannerDiv = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.img_url});
    background-repeat: no-repeat;
    background-position : center;
    background-size : cover;
    transition: background-image 0.5s ease;
    border-radius: 30px;
`
const BannerTextContainer = styled.div`
    display: flex;
    width: 97%;
    color: white;
    font-size: 40px;
    z-index: 10;
    text-align: center;
    justify-content: space-between;
    align-items: center;
`
const BannerTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`
const BannerText = styled.span`
    display: flex;
    color: white;
    font-size: 50px;
    font-family: 'TAEBAEKfont';
    text-shadow: 0px 1px 5px rgba(0,0,0, 0.7);
    margin: 3% 0 3% 0;
`
const Arrow = styled.img`
    display: flex;
    width: 3%;
    height: 1%;
    transform: rotate(${props => props.deg}deg);
    opacity: 0.1;
`

export default function Mainbanner(){
    const [bannerNumber, setBannerNumber] = useState(0)
    const bannerList = MainBannerData.list
    const changeBanners = (direction) =>{
        if(!direction){
            bannerNumber === 0 ? setBannerNumber(bannerList.length - 1) : setBannerNumber(bannerNumber - 1)
        } else {
            bannerNumber === bannerList.length - 1 ? setBannerNumber(0) : setBannerNumber(bannerNumber + 1)
        }
    }
    return(
        <BannerContainer>
            <BannerDiv img_url={bannerList[bannerNumber].img_url} />
            <BannerTextContainer >
                <Arrow src='https://cdn-icons-png.flaticon.com/512/271/271228.png' deg='180' onClick={() => changeBanners(0)}></Arrow>
                <BannerTextDiv>
                    {bannerList[bannerNumber].text.split('\n').map(el =>{
                        return(
                            <BannerText key={el}>
                                {el}
                            </BannerText>
                        )
                    })}
                </BannerTextDiv>
                <Arrow src='https://cdn-icons-png.flaticon.com/512/271/271228.png' onClick={() => changeBanners(1)}></Arrow>
            </BannerTextContainer>
        </BannerContainer>
    )
}