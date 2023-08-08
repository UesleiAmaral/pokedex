import axios from "axios";
import { colors } from "../color.js";

const count = 60;
//const count = 1281;
export const getPokemons = async () => {

  const pokemons = [];

  for (let i = 1; i <= count; i++) {

    await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((res) => {
        console.log(`Pokemon ${i}`);

        const ability = [];
        res.data.abilities.forEach(element => {

          ability.push(element.ability.name);

          return ability;
        });

        const stats = [];
        res.data.stats.forEach(element => {

          stats.push({ base_stat: element.base_stat, stat: element.stat.name });

          return stats;
        });

        const types = [];
        res.data.types.forEach(element => {

          const colorsType = testType(element.type.name);
          const objType =
          {
            name: element.type.name,
            colors: colorsType
          };

          types.push(objType);

          return types;
        });

        return pokemons.push(
          {
            id: res.data.id,
            name: res.data.name,
            id: res.data.id,
            image: res.data.sprites.other.dream_world.front_default,
            abilities: ability,
            stats: stats,
            types: types,
          }
        );

      })
      .catch((error) => console.log(error));
  }

  return pokemons;
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

