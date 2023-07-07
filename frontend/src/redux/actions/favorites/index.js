import addFavorite from "./addFavorite.js";
import removeFavorite from "./removeFavorite.js";

const actionFavorites = {
    addFavorite,
    removeFavorite,
}

export {
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from './actionTypes.js'

export default actionFavorites