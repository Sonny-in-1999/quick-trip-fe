import { styled } from 'styled-components' ;
import { useState } from 'react';
import Colors from '../../colors/Colors';
import MainRecommendData from '../../dummydata/MainRecommendData';

const Filters = styled.div`
  padding: 1% 6%;
  background-color: ${props => props.selected ? `${Colors.mainColor}` : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
  border: 1px solid ${Colors.mainColor};
  border-radius: 30px;
`

export default function FilterButton({tag, placeData, contents, setContents}){
    const [selected, setSelected] = useState(false)

    const select = () => {
        if(!selected){
            setContents(contents.filter(el => el.hashtag.includes(tag)))
            setSelected(true)
        } else if(selected){
            setContents(placeData)
            setSelected(false)
        }
    }
    return(
        <Filters onClick={select} selected={selected}>#{tag}</Filters>
    )
}