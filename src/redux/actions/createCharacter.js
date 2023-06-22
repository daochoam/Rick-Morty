import { CREATE_CHARACTER } from "../../const"

const createCharacter = (character) => {
    return {
        type: CREATE_CHARACTER,
        payload: character
    }
}

export default createCharacter