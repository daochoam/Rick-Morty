import { Episode } from "../../propTypes"
import axios from "axios"

const URL = 'https://rickandmortyapi.com/api'

const getEpisodesByCharacter = async (id) => {
  console.log(id)
  try {
    const infoEpisodes = await (axios.get(`${URL}/character/${id}`).then(({ data }) => {
      return Promise.all(data.episode.map(async (episode) => {
        return await axios.get(episode)
          .then(({ data }) => Episode.getEpisode(data))
      }))
    }))
    return { state: true, data: infoEpisodes }
  }
  catch (error) {
    return { state: false, message: 'There was an error loading episode information.' }
  }
}

export default getEpisodesByCharacter