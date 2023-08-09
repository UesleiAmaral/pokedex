import axios from "axios";
import { colors } from "../color.js";

const URL = `https://pokeapi.co/api/v2/pokemon`;
export const allData = [];
export const allPokemons = [];

//const count = 1281;
const count = 30;

for (let i = 1; i <= count; i++) {
  console.log(`Buscando Item ${i} em https://pokeapi.co/api/v2/pokemon/${i}/`);

  const data = axios.get(`${URL}/${i}/`)
    .then((res) => {
      return res.data;
    })

  allData.push(await data);

}

const testType = (type) => {

  const types = type.toLowerCase();

  if (types == "normal") {
    return colors.normal;

  }
  else if (types == "fire") {
    return colors.fire;

  }
  else if (types == "fighting") {
    return colors.fighting;

  }
  else if (types == "water") {
    return colors.water;

  }
  else if (types == "flying") {
    return colors.flying;

  }
  else if (types == "grass") {
    return colors.grass;

  }
  else if (types == "poison") {
    return colors.poison;

  }
  else if (types == "electric") {
    return colors.electric;

  }
  else if (types == "ground") {
    return colors.ground;

  }
  else if (types == "psychic") {
    return colors.psychic;

  }
  else if (types == "rock") {
    return colors.rock;

  }
  else if (types == "ice") {
    return colors.ice;

  }
  else if (types == "bug") {
    return colors.bug;

  }
  else if (types == "dragon") {
    return colors.dragon;

  }
  else if (types == "ghost") {
    return colors.ghost;

  }
  else if (types == "dark") {
    return colors.dark;

  }
  else if (types == "steel") {
    return colors.steel;

  }
  else if (types == "fairy") {
    return colors.fairy;

  }

}

const getAbilities = (data) => {
  const ability = [];

  data.forEach(element => {
    ability.push(element.ability.name)
  });

  return ability;
}

const getTypes = (data) => {
  const types = [];

  data.forEach(element => {
    const colorsType = testType(element.type.name);
    types.push(
      {
        name: element.type.name,
        colors: colorsType
      });
  });

  return types;
}

const createPokemon = () => {

  allData.map((element) => {
    return allPokemons.push(
      {
        id: element.id,
        name: element.name,
        image: element.sprites.other.dream_world.front_default,
        abilities: getAbilities(element.abilities),
        stats: element.stats, // SEPARAR AS FUNÇÕES MODULOS E ARQUIVOS E FINALIZAR O STATS
        types: getTypes(element.types),
      })
  })

}

createPokemon();

console.log(allPokemons);
console.log(allPokemons.length);

