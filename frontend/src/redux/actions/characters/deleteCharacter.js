import { DELETE_CHARACTER } from "./actionTypes"

const deleteCharacter = (payload) => {
    return {
        type: DELETE_CHARACTER,
        payload: payload
    }
}

export default deleteCharacter