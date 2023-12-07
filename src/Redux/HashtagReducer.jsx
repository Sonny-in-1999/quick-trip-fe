import { useState } from "react";
import MainRecommendData from "../dummydata/MainRecommendData";

const placeData = MainRecommendData.list
const hashtags = [...new Set(placeData.map(el => el.hashtag).reduce((acc, cur) => [...acc, ...cur]))]

const hashtagReducer =(hashtags,action) => {
    // switch(action.type){
        for(hashtag of hashtags){
            if(action.type === hashtag){
                return placeData.filter(el => el === hashtag)
            }
        } 
    // }
}; 

export default hashtagReducer