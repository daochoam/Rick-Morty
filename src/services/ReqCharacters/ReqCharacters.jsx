import Character from "../Characters/Characters"
import Episode from "../Episode/Episode"
import axios from "axios"
const ReqCharacters = {}

const URL = 'https://rickandmortyapi.com/api'

ReqCharacters.getById = async(id) => {
  try{
    return await axios(URL+`/character/${id}`)
    .then(({data})=>{
        return {state:true, data:Character.getCharacter(data)}
    })
  }
  catch(error){
    return {state:false, message: 'Character not found'}
  }
}

ReqCharacters.getEpisodesByCharacter = async(id) => {
  
  try{
    const infoEpisodes = await (axios.get(`${URL}/character/${id}`).then(({data})=> {
      return Promise.all(data.episode.map(async (episode) => {
        return await axios.get(episode)
        .then(({data}) => Episode.getEpisode(data))
      }))
    }))
    return {state:true, data:infoEpisodes}
  }
  catch(error){
    return {state:false, message: 'There was an error loading episode information.'}
  }
}

export default ReqCharacters;


// return {
//   state:true, 
//   data: data.episode.map(episode=>{
//     return axios(episode).then(({info})=>Episode.getEpisode(info))
//   })
// }