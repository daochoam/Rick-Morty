import {
    ADD_NEW_CHARACTER,
    CLEAN_CHARACTER_DETAIL,
    CREATE_CHARACTER,
    DELETE_CHARACTER,
    GET_CHARACTER_BY_ID,
    GET_CHARACTER_DETAIL,
    ADD_FAVORITE,
    REMOVE_FAVORITE,

} from './actions/index'

const initialState = {
    characters: [],
    characterDetail: {},
    characterOwns: [],
    myFavorites: [],
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
            };
        case ADD_NEW_CHARACTER:
            return {
                ...state,
                characterOwns: [...state.characterOwns, payload]
            }
        case CLEAN_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: []
            };
        case DELETE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter((character) => character.Id !== payload)
            };
        case GET_CHARACTER_BY_ID:
            return {
                ...state,
                characters: [...state.character, payload],
            };
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: payload
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.Id !== payload)
            };
        default:
            return { ...state }
    }
}

export default rootReducer