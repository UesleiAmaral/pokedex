import express from 'express';
import { getPokemons } from './pokemon/getPokemons.js';

const app = express();
const PORT = 3030;
const pokemons = await getPokemons();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

console.log(pokemons)
app.get('/pokemons', (req, res) => {
  res.send(pokemons);

})

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);

})