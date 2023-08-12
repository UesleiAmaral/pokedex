import express from 'express';
import { allPokemons } from './pokemon/index.js';

const app = express();
const PORT = 3030;
const pokemons = allPokemons;
const search = [];
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/pokemons', (req, res) => {
  res.send(pokemons);

});

app.get('/pokemons/:name', (req, res, next) => {
  const name = req.params.name;

  for (let i = 0; i < name.length; i++) {
    search.push(name);

    for (let index = 0; index < search[0].length; index++) {
      console.log(search[index])
      const pokemon = pokemons.filter(pokemon => pokemon.name[index] === search[index]);
      res.send(pokemon);
    }

    console.log(search);
    
  }
  search.shift();

});


app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);

});