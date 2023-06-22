import { GET_CHARACTER_BY_ID, URL_RICK_MORTY_CHARACTER } from "../../const"
import axios from 'axios'

const getCharacterById = (id) => {
  return async (dispatch) => {
    await axios.get(URL_RICK_MORTY_CHARACTER + id)
      .then(({ data }) => {
        dispatch({
          type: GET_CHARACTER_BY_ID,
          payload: data
        })
      }
      )

  }
}

export default getCharacterById