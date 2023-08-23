import express from "express";
import { getPokemons } from '../dataBase/dbConnect.js';
import { createPokemon } from "../pokemon/index.js";

const router = express.Router();


router.get('/', (req, res) => {
  try {
    res.send(
      `
      <h1 style="text-align:center;">
        PokedeX API
      <h1/>
      <p style="font-size:22px;">[Lista todos os pokemons]:
        <span style="font-weight:300; font-size:22px;">
          /pokemons
        <span/>
      <p/>
      <p style="font-size:22px;">[Pesquisar Pokemons]:
        <span style="font-weight:300; font-size:22px;"> /pokemons/"NOME DO POKEMON " = [ Podendo ser pesquisado apenas os primeiros caracteres do nome ]<span/>
      <p/>
    `
    );

  } catch (error) {
    console.log(error);
    res.sendStatus(500);

  };
});
const pokemons = await getPokemons();

createPokemon()

console.log(pokemons)

router.get("/pokemons", async (req, res) => {
  try {
    res.send(await getPokemons());

  } catch (error) {
    console.log(error);
    res.sendStatus(500);

  };
});

router.get('/pokemons/:name', (req, res, next) => {
  const name = req.params.name;

  try {
    const pokemon = allPokemons.filter(element => (element.name.substring(0, name.length) === name));
    res.send(pokemon);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);

  };
});

export default router;
