import {
  updateDB,
  deletePokemon,
  postPokemonUser,
  readPokemons,
  updatePokemon,
  filterPokemon,
} from "../dataBase/dbModel.js";

export const controllers = {
  async getAll(req, res) {
    const pokemons = await readPokemons();
    try {
      res.send(pokemons);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async filterItemByName(req, res) {
    const name = req.params.name;
    const pokemons = await readPokemons();

    try {
      const pokemon = pokemons.filter(
        (element) => element.name.substring(0, name.length) === name
      );

      if (pokemon.length == 0) {
        res.send({
          mensage: "Item not found",
        });

        return;
      }
      res.send(pokemon);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async filterItemById(req, res) {
    const body = req.params.id;

    const itemFilter = await filterPokemon(body);

    if (itemFilter.length == 1) {
      return res.send(itemFilter);
    }

    res.send({
      status: 404,
      statusMsg: "id not found",
    });
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
    const data = await deletePokemon(req.params.id);
    res.send(data);
  },

  async updateItem(req, res) {
    const body = req.body;
    
    const itemFilter = await filterPokemon(body.id);

    if (itemFilter.length === 1) {
      const data = await updatePokemon(body.id, body);

      res.send({
        status: "200",
        statusMsg: "OK",
      });

      return;
    }

    res.send({
      status: 404,
      statusMsg: "ID not found",
    });
  },
};
