import express from 'express';
import { allPokemons } from './pokemon/index.js';

const app = express();
const PORT = 3030;
const pokemons = allPokemons;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/pokemons', (req, res) => {
  res.send(pokemons);

});

app.get('/pokemons/:name', (req, res, next) => {
  const name = req.params.name;

  const pokemon = pokemons.filter(element => (element.name.substring(0, name.length) === name));

  res.send(pokemon);

});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);

});
