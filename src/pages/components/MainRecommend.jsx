import { styled } from 'styled-components'
import { useState } from 'react';
import Thumbnails from './Thumbnails'
import MainRecommendData from '../../dummydata/MainRecommendData';
import FilterButton from './FilterButton';
import Colors from '../../colors/Colors';

const MainRecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1%;
  margin: 3% 0 1% 0;
  justify-content: center;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.3);
`
const MainRecommendTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1% 0;
  align-items: baseline;
  font-family: 'SUIT-Regular';
`
const MainRecommendTitle = styled.span`
  font-size: 3rem;
  margin-right: 1%;
`
const MainRecommendDesc = styled.span`
  font-size: 1.2rem;
`
const MainRecommendContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
`
const MainRecommendFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 1%;
  font-family: 'SUIT-Regular';
`
const ShowmoreDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2% 0 1% 0;
`
const ShowmoreButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 5%;
`
const ShowmoreText = styled.span`
  color: ${Colors.font_lightgray};
  margin: 3%;
`
const ShowmoreImg = styled.img`
  width: 20%;
  filter: invert(82%) sepia(6%) saturate(12%) hue-rotate(35deg) brightness(94%) contrast(92%);
`
export default function MainRecommend({ data }) {
  const [shownContents, setShownContents] = useState(6)
  const placeData = data.list.slice(0, shownContents)
  const hashtags = [...new Set(placeData.map(el => el.hashtag).reduce((acc, cur) => [...acc, ...cur]))]

  const [selectedHashtags, setSelectedHashtags] = useState([])

  const findMatchedContent = (hashtags) => {
    for (let selectd of selectedHashtags) {
      if (hashtags.includes(selectd)) {
        continue
      } else {
        return false
      }
    }
    return true
  }

  const showMoreContents = () => {
    setShownContents(shownContents + 3)
  }

  return (
    <MainRecommendContainer>
      <MainRecommendTitleDiv>
        <MainRecommendTitle>{data.title}</MainRecommendTitle>
        <MainRecommendDesc>{data.desc}</MainRecommendDesc>
      </MainRecommendTitleDiv>
      <MainRecommendFilterDiv>
        {hashtags.map(el => el).slice(0, 5).map(el => <FilterButton tag={el} selectedHashtags={selectedHashtags} setSelectedHashtags={setSelectedHashtags}></FilterButton>)}
      </MainRecommendFilterDiv>
      <MainRecommendContentDiv>
        {placeData.filter(el => findMatchedContent(el.hashtag)).map(el => <Thumbnails place={el}></Thumbnails>)}
      </MainRecommendContentDiv>
      <ShowmoreDiv>
        {shownContents < data.list.length ? (
          <ShowmoreButton onClick={showMoreContents}>
            <ShowmoreText>더보기</ShowmoreText>
            <ShowmoreImg src='https://www.svgrepo.com/show/511356/arrow-down-338.svg'></ShowmoreImg>
          </ShowmoreButton>
        ) : ''}
      </ShowmoreDiv>
    </MainRecommendContainer>
  )
}