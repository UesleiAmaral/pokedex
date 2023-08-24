import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

import { attributes } from "../getPokemons/getAttributes.js";

const supabaseUrl = process.env.URL;
const supabaseKey = process.env.PIVATE_KEY_SUPABASE;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getPokemons = async () => {
  try {
    const { data, error } = await supabase
      .from('pokemons')
      .select()

    return data;

  } catch (error) {
    console.log(error);
  }
  
}

export const addPokemon = async (pokemon) => {

  try {
    await supabase
      .from('pokemons')
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
      .select()
  } catch (error) {
    console.log(error);
  }

}

export const deletePokemon = async (id) => {

}
