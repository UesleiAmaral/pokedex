import { attributes } from "../foreignAPI/getAttributes.js";
import { connection } from "./connection.js";

const supabase = connection();

export const createPokemon = async (pokemon) => {
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
        },
      ])
      .select();
  } catch (error) {
    console.log(error);
  }
};

export const readPokemons = async () => {
  try {
    const { data, error } = await supabase.from("pokemons").select();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePokemon = async (id) => {};

export const deletePokemon = async (id) => {};
