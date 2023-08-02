import express from 'express';
import { getPokemons } from './pokemon/getPokemons.js';

const app = express();
const PORT = 3030;
const pokemons = await getPokemons();

console.log(pokemons)
app.get('/pokemons', (req, res) => {
  res.send(pokemons);

})

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);

})