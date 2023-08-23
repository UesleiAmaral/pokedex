import 'dotenv/config';
import axios from "axios";
import { attributes } from "./getAttributes.js";
import { createClient } from '@supabase/supabase-js';

const URL_API = `https://pokeapi.co/api/v2/pokemon`;
export const allData = [];
export const allPokemons = [];

const supabaseUrl = process.env.URL;
const supabaseKey = process.env.PIVATE_KEY_SUPABASE;
const supabase = createClient(supabaseUrl, supabaseKey);

//const count = 1281;
const count = 10;

for (let i = 1; i <= count; i++) {
  console.log(`Buscando Item ${i} em ${URL_API}/${i}/`);

  const data = axios.get(`${URL_API}/${i}/`)
    .then((res) => {
      return res.data;
    })
  allData.push(await data);

};

export const createPokemon  =  () => {

  allData.map(async (element) => {
    const { data, error } = await supabase
      .from('pokemons')
      .upsert([
        {
          id: element.id,
          name: element.name,
          image: element.sprites.other.dream_world.front_default,
          abilities: attributes.getAbilities(element.abilities),
          stats: attributes.getStats(element.stats),
          types: attributes.getTypes(element.types),
        },
      ])
      .select()
      

  });

};
