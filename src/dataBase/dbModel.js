import { attributes } from "../foreignAPI/getAttributes.js";
import { connection } from "./connection.js";

const supabase = connection();

export const createPokemon = async (pokemon, is_user) => {
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
          is_user: is_user
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

export const updatePokemon = async (id) => { };

export const deletePokemon = async (id) => { };


export const postPokemonUser = async (pokemon, is_user) => {
  console.log("ENTREI")
  try {
    await supabase
      .from("pokemons")
      .upsert([
        {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          abilities: [pokemon.abilities],
          stats: [pokemon.stats],
          types: [pokemon.types],
          is_user: is_user
        },
      ])
      .select();
    
    console.log("POSTEI")
  } catch (error) {
    console.log("DEU ERRO!!!!!")

    console.log("Error POST pokemon " + error + "INTEM NAO ENVIADO");
  }

}