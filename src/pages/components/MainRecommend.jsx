import { styled } from 'styled-components' 

const MainRecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1%;
  margin: 3% 0;
  border: 1px solid red;
`
const MainRecommendTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid green;
`
const MainRecommendTitle = styled.span`

`
const MainRecommendDesc = styled.span`
  
`

export default function MainRecommend(){
  return(
    <MainRecommendContainer>
      <MainRecommendTitleDiv>
        <MainRecommendTitle>제목</MainRecommendTitle>
        <MainRecommendDesc>설명</MainRecommendDesc>
      </MainRecommendTitleDiv>
    </MainRecommendContainer>
  )
}