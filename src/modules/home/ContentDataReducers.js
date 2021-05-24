

import {GET_CONTENT_LISTING_DATA} from './Actions';
const initState = {
    ContentData: [],
    error: ""  
};

const ContentDataReducers = (state = initState, action) => {
    switch (action.type) {
        case GET_CONTENT_LISTING_DATA:
            console.log(action.ContentData)
            return { ...state, ContentData: action.ContentData};

        
        default:
            return state;
    }
};


export default ContentDataReducers;