import {
  updateDB,
  deletePokemon,
  postPokemonUser,
  readPokemons,
  updatePokemon,
  filterPokemon,
} from "../dataBase/dbModel.js";

let pokemons = await readPokemons();

export const controllers = {
  async getAll(req, res) {
    pokemons = await readPokemons();
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

  async postItem(req, res) {
    const pokemon = req.body;

    const data = await postPokemonUser(pokemon, true);

    if (data.status == 201) {
      return res.send({
        statusText: data.statusText,
        statusCode: data.status,
      });
    }
    res.send({
      statusText: data.statusText,
      statusDetails: data.error.details,
    });
  },

  async deleteItem(req, res) {
    const { id } = req.params;
    const data = await deletePokemon(id);
    res.send({
      status: data.status,
      statusMsg: data.statusText,
    });
  },

  async updateItem(req, res) {
    const body = req.body;
    const itemFilter = await filterPokemon(body.id);

    if (itemFilter.length === 1) {
      const data = await updatePokemon(body.id, body);

      res.send({
        status: data.status,
        statusMsg: data.statusText,
      });

      return;
    }

    res.send({
      status: 205,
      statusMsg: "Reset Content",
    });
  },
};
