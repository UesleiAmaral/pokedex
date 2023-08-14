import axios from "axios";
import { attributes } from "./getAttributes.js";

const URL = `https://pokeapi.co/api/v2/pokemon`;
export const allData = [];
export const allPokemons = [];

//const count = 1281;
const count = 50;

for (let i = 1; i <= count; i++) {
  console.log(`Buscando Item ${i} em ${URL}/${i}/`);

  const data = axios.get(`${URL}/${i}/`)
    .then((res) => {
      return res.data;
    })
  allData.push(await data);

};

const createPokemon = () => {

  allData.map((element) => {

    return allPokemons.push(
      {
        id: element.id,
        name: element.name,
        image: element.sprites.other.dream_world.front_default,
        abilities: attributes.getAbilities(element.abilities),
        stats: attributes.getStats(element.stats),
        types: attributes.getTypes(element.types),
      });
    
  });

};

createPokemon();