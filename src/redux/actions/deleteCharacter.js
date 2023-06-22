import { DELETE_CHARACTER } from "../../const"

const deleteCharacter = (payload) => {
    return {
        type: DELETE_CHARACTER,
        payload: payload
    }
}

export default deleteCharacter