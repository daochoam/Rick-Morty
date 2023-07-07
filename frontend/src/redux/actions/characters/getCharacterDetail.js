import { URL_RICK_MORTY_CHARACTER } from "../../../const"
import { GET_CHARACTER_DETAIL } from "./actionTypes"
import { reqCharacter } from "../../../services"
import axios from 'axios'

const getCharacterDetail = (id) => {
    return async (dispatch) => {
        await axios.get(URL_RICK_MORTY_CHARACTER + id)
            .then(({ data }) => {
                dispatch({
                    type: GET_CHARACTER_DETAIL,
                    payload: reqCharacter.getByIddata
                })
            });
    }
}

export default getCharacterDetail