import createCharacter from "./createCharacter.js";
import deleteCharacter from "./deleteCharacter.js";
import getCharacterById from "./getCharacterById.js";
import getCharacterDetail from "./getCharacterDetail.js";

const actionsCharacters = {
    createCharacter,
    deleteCharacter,
    getCharacterById,
    getCharacterDetail,
}

export {
    ADD_NEW_CHARACTER,
    CLEAN_CHARACTER_DETAIL,
    CREATE_CHARACTER,
    DELETE_CHARACTER,
    GET_CHARACTER_BY_ID,
    GET_CHARACTER_DETAIL
} from './actionTypes.js'

export default actionsCharacters



