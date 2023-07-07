import { Character } from "../../propTypes"
import axios from "axios"
import { URL_RICK_MORTY_CHARACTER } from "../../const"

/**
 * 
 * @param {*} id request id of the character
 * @returns Character: {id, name, image, status, species, gender}
 */
const getById = async (id) => {
    // try {
    //     return await axios(`${URL_RICK_MORTY_CHARACTER}`+id)
    //         .then(({ data }) => {
    //             return { state: true, data: Character.getCharacter(data) }
    //         })
    // }
    // catch (error) {
    //     return { state: false, message: 'Character not found' }
    // }

    return await axios(`${URL_RICK_MORTY_CHARACTER}` + id)
        .then(({ data }) => {
            return { data: Character.getCharacter(data) }
        }).catch((error) => {
            return { message: 'Character not found' }
        })

}

export default getById
