import express from "express";
import { allPokemons } from '../pokemon/index.js';
import db from "../db.json" assert { type: "json" };

allPokemons.map((pokemon) => {
  db.push(pokemon);
})

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

router.get("/pokemons", (req, res) => {
  try {
    res.send(db);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);

  };
});

router.get('/pokemons/:name', (req, res, next) => {
  const name = req.params.name;

  try {
    const pokemon = db.filter(element => (element.name.substring(0, name.length) === name));
    res.send(pokemon);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);

  };
});

export default router;
