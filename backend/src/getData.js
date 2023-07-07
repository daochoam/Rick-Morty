import fs from 'fs'

export const reqRickMorty = async (data) => {
    const URL = 'https://rickandmortyapi.com/api'
    try {
        const maxPages = await fetch(`${URL}/${data}`)
            .then(response => response.json())
            .then(({ info, __ }) => { return info.pages })

        let dataApi = []
        let page = 1

        while (page <= maxPages) {
            const pageResponse = await fetch(`${URL}/${data}/?page=${page}`);
            const { ___, results } = await pageResponse.json();
            dataApi.push(...results);
            page++
        }
        return { status: 200, data: dataApi, message: 'The data has been uploaded successfully.' }
    } catch (error) {
        return { status: 404, data: [], message: 'There was an error loading information.' };
    }
};

export const dataRickMorty = (info) => {
    // Verificar si el directorio existe
    fs.access('./src/utils', fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdir('./src/utils', { recursive: true }, (err) => {
                if (err) {
                    console.error('Error al crear el directorio:', err);
                    return;
                }
            });
        }
    });

    fs.access(`./src/utils/${info}s.json`, fs.constants.F_OK, (err) => {
        if (err) {
            reqRickMorty(info).then(({ status, data, message }) => {
                if (status === 200) {
                    fs.writeFile(`./src/utils/${info}s.json`, JSON.stringify(data), (err) => {
                        if (err) {
                            console.error('Error creating JSON file:', err);
                            return;
                        }
                        console.log(`JSON file ${info}s created successfully.`);
                    });
                } else {
                    console.log(message)
                }
            })
        } else {
            console.log(`The ${info}s file has been previously created.`);
        }
    });
}

//TODO Carga de datos Rick & Morty
const apiRickMorty = ["character", "episode", "location"]
apiRickMorty.forEach(data => {
    dataRickMorty(data)
})