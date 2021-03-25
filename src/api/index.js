import axios from "axios";
import { API_KEY, API_GATEWAY } from "../constants/config";

import { apiStore } from '../stores';

axios.interceptors.response.use((response => response), error => {
    apiStore.setErrorState(true);
    throw error;
})

export const getTrending = (mediaType, timeWindow) => {
    return axios.get(`${API_GATEWAY}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`).then(response => {
        if (response.status == 200) {
            return response.data;
        }
    }).catch(e => e);
}