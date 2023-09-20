import { attributes } from "../foreignAPI/getAttributes.js";
import { connection } from "./connection.js";

const supabase = connection();

export const updateDB = async (pokemon, is_user) => {
  try {
    await supabase
      .from("pokemons")
      .upsert([
        {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          abilities: attributes.getAbilities(pokemon.abilities),
          stats: attributes.getStats(pokemon.stats),
          types: attributes.getTypes(pokemon.types),
          is_user: is_user,
        },
      ])
      .select();
  } catch (error) {
    console.log(error);
  }
};

export const readPokemons = async () => {
  try {
    const { data, error } = await supabase.from("pokemons").select().order('id', {ascending: true});

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePokemon = async (id, data) => {
  try {
    const error = await supabase
      .from("pokemons")
      .update([
        {
          name: data.name,
          image: data.image,
          abilities: data.abilities,
          stats: data.stats,
          types: data.types,
        },
      ])
      .eq("id", id);

    return error;
  } catch (error) {
    console.log("Error " + error);
  }

};

export const deletePokemon = async (id) => {
  try {
    //FILTRAR SE EXISTE ESTE ID
    const itemFilter = await filterPokemon(id)
    if (itemFilter.length === 1) {
      // SE EXISTE! DELETA
      const data = await supabase.from("pokemons").delete().eq("id", id);
      // E RETORNA
      return {
        status: "200",
        statusMsg: "OK",
      };
    }

    // SE NÃO EXISTE RETORNAR A MSG INFORMANDO QUE O ID NÃO EXISTE
    return {
      status: 404,
      statusMsg: "id not found",
    };
  } catch (error) {
    console.log("Error " + error);
  }
};

export const postPokemonUser = async (pokemon, is_user) => {
  const pokemons = await readPokemons();
  try {
    const data = await supabase
      .from("pokemons")
      .insert(
        {
          id: pokemons.length + 2,
          name: pokemon.name,
          image: pokemon.image,
          abilities: pokemon.abilities,
          stats: pokemon.stats,
          types: pokemon.types,
          is_user: is_user,
        },
      )
      .select();
    return data;
  } catch (error) {
    return console.log("Error POST pokemon " + error);
  }
};

export const filterPokemon = async (id) => {
  const { data: pokemons, error } = await supabase
    .from("pokemons")
    .select("*")
    .eq("id", id);

  return pokemons;
};
