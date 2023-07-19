const fs = require('fs').promises;
const path = require('path');

const moviePath = path.resolve(__dirname, './movies.json');

async function readList() {
    try{
        const data = await fs.readFile(moviePath, 'utf-8');
        const result = JSON.parse(data);
        return result;
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error}`);
    }
}

async function findMovie(id) {
    try{
        const data = await fs.readFile(moviePath, 'utf-8');
        const result = JSON.parse(data);
        const movieSelected = result.find((movie) => movie.id === id);
        if(!id) {
           return console.log('Este id é inexistente');
        }
        return movieSelected;
    } catch(error) {
        console.error(`Erro na leitura do arquivo: ${error}`);
    }
}

async function addMovie(movie, price) {
    try{
        const data = await fs.readFile(moviePath, 'utf-8');
        const result = JSON.parse(data);
        const newMovie = {
            id: result[result.length - 1].id +1,
            movie,
            price,
        }
        const newList = JSON.stringify([ ...result, newMovie ]);
        await fs.writeFile(moviePath, newList);
        return newMovie;
    }catch(eror){
        console.error(`Erro na leitura ou gravação: ${error}`)
    }
}

async function attMovie(id, movie, price) {
    try{
        const data = await fs.readFile(moviePath, 'utf-8');
        const result = JSON.parse(data);
        const movieSelected = result.filter((movie) => movie.id !== id);
        console.log(movieSelected);
        const attMovie = {
            id,
            movie,
            price
        };
        const newList = JSON.stringify([ ...movieSelected, attMovie ]);
        await fs.writeFile(moviePath, newList);
        return attMovie;
    }catch(error){
        console.error('Erro na Atualização')
    }
}

async function deleteMovie(movie) {
    try{
        const result = await readList();
        const movieDeleted = result.find((name) => name.movie === movie);
        const movieSelected = result.filter((name) => name.movie !== movie);
        const newList = JSON.stringify([ ...movieSelected ]);
        await fs.writeFile(moviePath, newList);
        return movieDeleted
    }catch(error){
        console.error(`Erro: ${error}`)
    }
}

module.exports = {
    readList,
    findMovie,
    addMovie,
    attMovie,
    deleteMovie
}