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
  border: 1px solid red;
`
const MainRecommendTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1% 0;
  border: 1px solid green;
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
  justify-content: space-between;
`
const MainRecommendFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 1%;
  border: 1px solid pink;
  font-family: 'SUIT-Regular';
`

export default function MainRecommend(){
  const placeData = MainRecommendData.list
  const hashtags = [...new Set(placeData.map(el => el.hashtag).reduce((acc, cur) => [...acc, ...cur]))]
  console.log(hashtags)

  const [selected, setSelected] = useState(false)

  return(
    <MainRecommendContainer>
      <MainRecommendTitleDiv>
        <MainRecommendTitle>지금이 딱! 유럽여행</MainRecommendTitle>
        <MainRecommendDesc>누구나 한번쯤 유럽을 가슴에 품고 산다</MainRecommendDesc>
      </MainRecommendTitleDiv>
      <MainRecommendFilterDiv>
        {hashtags.splice(0, 5).map(el => <FilterButton tag={el}></FilterButton>)}
      </MainRecommendFilterDiv>
      <MainRecommendContentDiv>
        {placeData.map(el => <Thumbnails place={el}></Thumbnails>)}
      </MainRecommendContentDiv>
    </MainRecommendContainer>
  )
}