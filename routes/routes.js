import express from "express";
import { allPokemons } from '../pokemon/index.js';

const pokemons = allPokemons;
const router = express.Router();

router.get("/pokemons", (req, res) => {
  try {
    res.send(pokemons);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);

  }

});

router.get('/pokemons/:name', (req, res, next) => {
  const name = req.params.name;

  try {
    const pokemon = pokemons.filter(element => (element.name.substring(0, name.length) === name));
    res.send(pokemon);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

});

export default router;

