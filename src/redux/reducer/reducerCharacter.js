import {
    CLEAN_CHARACTER_DETAIL,
    CREATE_CHARACTER,
    DELETE_CHARACTER,
    GET_ALL_CHARACTERS,
    GET_CHARACTER_BY_ID,
    GET_CHARACTER_DETAIL
} from '../../const'

const initialState = {
    characters: [],
    characterDetail: [],
    newCharacter: [],
};


function reducerCharacter(state = initialState, { type, payload }) {
    switch (type) {
        case GET_CHARACTER_BY_ID:
            return {
                ...state,
                characters: payload,
            };
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: payload
            };
        case CLEAN_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: []
            };
        default:
            return {
                ...state,
            };
    }
}

export default reducerCharacter;
