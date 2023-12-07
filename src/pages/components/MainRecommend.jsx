import { styled } from 'styled-components' 
import { useState } from 'react';
import Thumbnails from './Thumbnails'
import MainRecommendData from '../../dummydata/MainRecommendData';
import FilterButton from './FilterButton';

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

export default function MainRecommend({data}){
  const placeData = data.list
  const hashtags = [...new Set(placeData.map(el => el.hashtag).reduce((acc, cur) => [...acc, ...cur]))]
  // const [contents, setContents] = useState(placeData);

  const [selectedHashtags, setSelectedHashtags] = useState([])
  console.log(selectedHashtags)

  const findMatchedContent = (hashtags) => {
    for(let selectd of selectedHashtags){
      if(hashtags.includes(selectd)){
        continue
      } else {
        return false
      }
    }
    return true
  }

  return(
    <MainRecommendContainer>
      <MainRecommendTitleDiv>
        <MainRecommendTitle>{data.title}</MainRecommendTitle>
        <MainRecommendDesc>{data.desc}</MainRecommendDesc>
      </MainRecommendTitleDiv>
      <MainRecommendFilterDiv>
        {hashtags.map(el => el).slice(0,5).map(el => <FilterButton tag={el} selectedHashtags={selectedHashtags} setSelectedHashtags={setSelectedHashtags}></FilterButton>)}
      </MainRecommendFilterDiv>
      <MainRecommendContentDiv>
        {placeData.filter(el => findMatchedContent(el.hashtag)).map(el => <Thumbnails place={el}></Thumbnails>)}
      </MainRecommendContentDiv>
    </MainRecommendContainer>
  )
}