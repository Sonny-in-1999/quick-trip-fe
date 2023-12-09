import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import Colors from '../../colors/Colors'

const DetailContainer = styled.div`
    width: 96%;
    padding: 2%;
    border: 1px solid red;
`
const DetailDiv = styled.div`
    width: 94%;
    padding: 3%;
    border: 10px solid ${Colors.mainColor};
`
const DetailUpperDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid green;
`
const DetailTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border: 1px solid yellow;
`
const DetailTitle = styled.div`
    width: 30%;
    border: 1px solid black;
`
const DetailTitleText = styled.span`
    font-size: 3em;
    color: ${Colors.mainColor};
`
const DetailDesc = styled.div`
    width: 30%;
`


export default function PackageDetail(){
    const {id} = useParams()
    console.log(id)
    return(
        <DetailContainer>
            <DetailDiv>
                <DetailUpperDiv>
                    <DetailTitleDiv>
                        <DetailTitle>
                            <DetailTitleText>베를린</DetailTitleText>
                        </DetailTitle>
                    </DetailTitleDiv>
                </DetailUpperDiv>
            </DetailDiv>
        </DetailContainer>
    )
}