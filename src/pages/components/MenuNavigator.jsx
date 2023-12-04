import { styled } from 'styled-components' 
import Colors from '../../colors/Colors'
import MenuNavigatorData from '../../dummydata/MenuNavigatorData'

const NavigatorContainer = styled.div `
  width: 90%;
  padding: 1%;
`
const NavigatorDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ThumbnailDiv = styled.div`
  width: 30%;
  &:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }
`
const Thumbnail = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${props => props.img_url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(3px);
    border-radius: 20px;
  }
`;
const ThumbnailTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28% 0;
  color: white;
  text-align: center;
  text-shadow: 0px 5px 8px black;
  font-family: 'JalnanGothic';
`
const ThumbnailDescribtionText = styled.div`
  width: 100%;
  font-size: 1.2rem;
  text-align: left;
  margin: 2% 0;
`
const ThumbnailMainText = styled.div`
  width: 100%;
  font-size: 4rem;
`
export default function MenuNavigator(){
  const data = MenuNavigatorData.list
  return(
    <NavigatorContainer>
      <NavigatorDiv>
        {data.map(el => {
          return (
              <ThumbnailDiv key={el.idx}>
                <Thumbnail img_url={el.img_url}>
                  <ThumbnailTextDiv>
                    <ThumbnailDescribtionText>{el.desc}</ThumbnailDescribtionText>
                    <ThumbnailMainText>{el.main}</ThumbnailMainText>
                  </ThumbnailTextDiv>
                </Thumbnail>
              </ThumbnailDiv>
            )
        })}
        
      </NavigatorDiv>    
    </NavigatorContainer>
  )
}