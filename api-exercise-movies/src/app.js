// npm i express@4.17.1 --save-exact
// npm i nodemon@2.0.15 --save-dev --save-exact
const express = require('express');

const { findMovie, readList, addMovie, attMovie, deleteMovie } = require('./filtros');

const app = express();
app.use(express.json());


app.get('/movies/:id', async (req, res) => {
    try {
        const movie = await findMovie(Number(req.params.id));
        res.status(200).json({ movie });
    } catch(error) {
        res.status(500).send({ message: error.message })
    }
})

app.get('/movies', async (req, res) => {
    try{
        const list = await readList();
        res.status(200).json({ list });
    } catch(error) {
        res.status(500).send({ message: error.message });
    }
})

app.post('/movies', async (req, res) => {
    try{
        const {movie, price} = req.body;
        const newMovie = await addMovie(movie, price);
        res.status(201).json({ newMovie });
    }catch(error){
        res.status(500).send({ message: error.message });
    }
})

app.put('/movies/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { movie, price } = req.body;
        const response = await attMovie(Number(id), movie, price);
        res.status(201).json({ response });
    }catch(error){
        res.status(500).send({ message: error.message });
    }
})

app.delete('/movies/:movie', async (req, res) => {
    try{
        const { movie } = req.params;
        const response = await deleteMovie(movie);
        res.status(200).json({ response });
    }catch(error){
        res.status(500).send({ message: error.message});
    }
})

module.exports = app;