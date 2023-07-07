import { CREATE_CHARACTER } from "./actionTypes"

const createCharacter = (character) => {
    return {
        type: CREATE_CHARACTER,
        payload: character
    }
}

export default createCharacter