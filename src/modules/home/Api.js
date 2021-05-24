
import {fetchContentListingData} from "./Actions"
import axios from 'axios';

import "./API/CONTENTLISTINGPAGE-PAGE1.json"

export function fetchContentListing(pageno){
    return dispatch => {
        return axios.get(`./API/CONTENTLISTINGPAGE-PAGE${pageno}.json`)
        // .then((res) => console.log(res.data))
            .then(response => dispatch(fetchContentListingData(response.data)))
    }
};
