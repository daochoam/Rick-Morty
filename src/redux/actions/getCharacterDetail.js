import { GET_CHARACTER_DETAIL, URL_RICK_MORTY_CHARACTER } from "../../const"
import axios from 'axios'

const getCharacterDetail = (id) => {
    return async (dispatch) => {
        const response = await axios.get(URL_RICK_MORTY_CHARACTER + id);
        dispatch({
            type: GET_CHARACTER_DETAIL,
            payload: response.data
        });
    }
}

export default getCharacterDetail