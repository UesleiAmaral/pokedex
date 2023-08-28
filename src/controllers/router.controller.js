import { readPokemons } from "../dataBase/model.js";

const pokemons = await readPokemons();
const teste = [];

export const controllers = {
  getAll(req, res) {
    try {
      res.send(pokemons);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  root(req, res) {
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
    }
  },

  filterItemByName(req, res) {
    const name = req.params.name;

    try {
      const pokemon = pokemons.filter(
        (element) => element.name.substring(0, name.length) === name
      );
      res.send(pokemon);
      console.log(`Filter applied returned ${pokemon.length} Results`);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  postItem(req, res) {
    const pokemon = req.body;

    teste.push(pokemon);
    res.send(teste);
  },

  testPostItem(req, res) {
    const id = req.params.id;

    const item = teste.filter((element) => element.id === id);
    console.log(item);

    res.send(item);
  },
};
