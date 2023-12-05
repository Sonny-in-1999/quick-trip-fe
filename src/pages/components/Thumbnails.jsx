import { styled } from 'styled-components' 
import Colors from '../../colors/Colors'

const ThumbnailContainer = styled.div`
  width: 20%;
  border-radius: 20px;
  margin: 1%;
  padding: 1%;
  box-shadow: 0px 3px 7px rgba(0,0,0,0.5);
  &:hover{
    transform: scale(1.05);
    transition: 0.5s;
  }
`
const ThumbnailDiv =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TnumbnailImg = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 300px;
`
const ThumbnailTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'SUIT-Regular';
`
const UpperTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 3% 0 5% 0;
`
const MainTextDiv = styled.div`
  width: 50%;
  text-align: left;
  font-size: 2rem;
  font-weight: 900;
`
const DescTextDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 1rem;
  font-weight: 400;
`
const HashtagDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Hashtag = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  margin-right: 1%;
`

export default function Thumbnails({place}){
  return(
    <ThumbnailContainer>
      <ThumbnailDiv>
        <TnumbnailImg src={place.img_url}></TnumbnailImg>
        <ThumbnailTextDiv>
          <UpperTextDiv>
            <MainTextDiv>{place.name}</MainTextDiv>
            <DescTextDiv>{place.desc.split('\n').map(el => <span>{el}</span>)}</DescTextDiv>
          </UpperTextDiv>
            <HashtagDiv>
              {place.hashtag.map(el => <Hashtag>#{el}</Hashtag>)} 
            </HashtagDiv>
        </ThumbnailTextDiv>
      </ThumbnailDiv>
    </ThumbnailContainer>
  )
}