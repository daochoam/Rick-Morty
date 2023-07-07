import { getCharacterById } from './controllers/getCharacterById.js'
import characters from './utils/characters.json' assert { type: 'json' };
import episodes from './utils/episodes.json' assert { type: 'json' };
import locations from './utils/locations.json' assert { type: 'json' };
import http from 'http'

const PORT = 3001
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req
    if (url.includes('onsearch')) {
        const id = url.match(/(?<=\/)\d+$/)[0]
        
    }

}).listen(PORT, 'localhost')



//!  HTTP CreateServer
// const PORT = 3001

// http.createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req
//     console.log(url)
//     if (url.includes("rickandmorty/character/")) {
//         const id = url.match(/(?<=\/)\d+$/)[0]
//         const character = characters.find((char) => char.id == id)
//         if (character) {
//             res.writeHead(200, { "Content-Type": "application/json" })
//             res.end(JSON.stringify(character))
//         } else {
//             res.writeHead(404, { "Content-Type": "plain/text" })
//             res.end(JSON.stringify({ error: "Character not found" }))
//         }

//     }
// }).listen(PORT, "localhost")

