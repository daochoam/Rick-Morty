import { GET_CHARACTER_BY_ID } from "./actionTypes"
import { reqCharacter } from "../../../services"

const getCharacterById = (id) => {
  return async (dispatch) => {
    await reqCharacter.getById(id).then(({data,message}) => {
      dispatch({
        type: GET_CHARACTER_BY_ID,
        payload: data
      })
    }).catch((err) => { return err })
  }
}

export default getCharacterById