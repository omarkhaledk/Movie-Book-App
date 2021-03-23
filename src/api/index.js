import axios from "axios";
import { API_KEY } from "../constants/config"

export const getTrending = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`).then(response => {
        if (response.status == 200) {
            return response.data;
        }
    }).catch(e => e);
}