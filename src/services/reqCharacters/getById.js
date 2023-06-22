import { Character } from "../../propTypes"
import axios from "axios"
const URL = 'https://rickandmortyapi.com/api'

const getById = async (id) => {
    try {
        return await axios(URL + `/character/${id}`)
            .then(({ data }) => {
                return { state: true, data: Character.getCharacter(data) }
            })
    }
    catch (error) {
        return { state: false, message: 'Character not found' }
    }
}

export default getById
