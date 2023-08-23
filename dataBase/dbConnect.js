import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.URL;
const supabaseKey = process.env.PIVATE_KEY_SUPABASE;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getPokemons = async () => {
  const { data, error } = await supabase
    .from('pokemons')
    .select()
  
  return data;

}

export const addPokemon = async (pokemon) => {

}

export const deletePokemon = async (id) => {

}
