import axios from "axios";

const count = 10;
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

          stats.push({base_stat: element.base_stat, stat:element.stat.name});

          return stats;
        });

        const type = [];
        res.data.types.forEach(element => {

          type.push(element.type.name);

          return type;
        });

        return pokemons.push(
          {
            id: res.data.id,
            name: res.data.name,
            id: res.data.id,
            image: res.data.sprites.other.dream_world.front_default,
            abilities: ability,
            stats: stats,
            types: type,
          }
        );

      })
      .catch((error) => console.log(error));
  }

  return pokemons;
}

