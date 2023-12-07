import { combineReducers, createStore } from 'redux';
import hashtagReducer from './HashtagReducer';

const rootReducer = combineReducers({
    hashtagReducer
})

const store = createStore(hashtagReducer);
export default store