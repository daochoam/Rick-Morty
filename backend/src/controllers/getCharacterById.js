import axios from 'axios'
const URL = 'https://rickandmortyapi.com/api'

const success = (response, res) => {
    const { id, image, name, gender, species } = response.data
    res.writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify({ id, image, name, gender, species }))
}

const error = (err, res) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
        .end(JSON.stringify(err.message))
}

const getCharacterById = (res, id) => {
    axios.get(`${URL}/character/${id}`)
        .then((response) => success(response, res))
        .catch((error) => error(error, res))
}

export { getCharacterById }